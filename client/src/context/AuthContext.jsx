import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext(null);

export function isPortalAdmin(user) {
  return user?.email?.trim().toLowerCase() === 'admin@2026.com'
    || user?.app_metadata?.role === 'admin';
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const syncSession = async () => {
      try {
        const { data: { session: activeSession }, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (!isMounted) return;
        setSession(activeSession ?? null);
        setUser(activeSession?.user ?? null);
      } catch (error) {
        console.error('Unable to get Supabase session.', error);
        if (isMounted) {
          setSession(null);
          setUser(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    syncSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!isMounted) return;

      setSession(nextSession ?? null);
      setUser(nextSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      isMounted = false;
      subscription?.unsubscribe?.();
    };
  }, []);

  const isAuthenticated = Boolean(session && user);
  const isAdmin = isPortalAdmin(user);

  const signUp = useCallback(async ({ name, email, password, redirectTo = '/' }) => {
    const confirmationUrl = new URL('/login', window.location.origin);
    confirmationUrl.searchParams.set('redirect', redirectTo);
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { full_name: name.trim() },
        emailRedirectTo: confirmationUrl.toString()
      }
    });

    if (error) throw error;
    return data;
  }, []);

  const signInWithPassword = useCallback(async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password
    });

    if (error) throw error;
    setSession(data.session ?? null);
    setUser(data.user ?? null);
    setLoading(false);
    return data;
  }, []);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }

    setSession(null);
    setUser(null);
  }, []);

  const profile = useMemo(() => ({
    name: user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || 'Student',
    email: user?.email || '',
    avatar: user?.user_metadata?.avatar_url || user?.user_metadata?.picture || null
  }), [user]);

  const value = useMemo(() => ({
    session,
    user,
    profile,
    isAuthenticated,
    isAdmin,
    loading,
    signUp,
    signInWithPassword,
    signOut
  }), [session, user, profile, isAuthenticated, isAdmin, loading, signUp, signInWithPassword, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }

  return context;
}
