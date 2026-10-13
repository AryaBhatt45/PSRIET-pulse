import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { fetchPortalRecords, portalRecordTypes } from '../services/portalData';

const CurriculumLockContext = createContext(null);
const refreshIntervalMs = 15000;

export const normalizeCurriculumValue = (value) => String(value || '')
  .normalize('NFKC')
  .replace(/[’‘]/g, "'")
  .replace(/[–—]/g, '-')
  .replace(/\s+/g, ' ')
  .trim()
  .toLocaleLowerCase();

const normalizeSemesterValue = (value) => normalizeCurriculumValue(value)
  .replace(/^(?:sem|semester)\s*/, '');

const getRuleTimestamp = (rule) => {
  const timestamp = Date.parse(rule.updatedAt || rule.createdAt || '');
  return Number.isFinite(timestamp) ? timestamp : 0;
};

const getLatestRule = (rules) => rules.reduce((latest, rule) => (
  !latest || getRuleTimestamp(rule) > getRuleTimestamp(latest) ? rule : latest
), null);

export function CurriculumLockProvider({ children }) {
  const [locks, setLocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const latestRequestId = useRef(0);
  const isMounted = useRef(false);

  const refreshLocks = useCallback(async () => {
    const requestId = ++latestRequestId.current;
    try {
      const records = await fetchPortalRecords(portalRecordTypes.curriculumLock);
      if (!isMounted.current || requestId !== latestRequestId.current) return;
      setLocks(records);
      setError('');
    } catch (loadError) {
      if (!isMounted.current || requestId !== latestRequestId.current) return;
      console.error('Unable to load curriculum note access settings.', loadError);
      setError(loadError.message || 'Unable to verify notes access.');
    } finally {
      if (isMounted.current && requestId === latestRequestId.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    refreshLocks();
    const intervalId = window.setInterval(refreshLocks, refreshIntervalMs);
    return () => {
      isMounted.current = false;
      latestRequestId.current += 1;
      window.clearInterval(intervalId);
    };
  }, [refreshLocks]);

  const isLocked = useCallback((courseKey, semester, subject) => {
    const course = normalizeCurriculumValue(courseKey);
    const semesterName = normalizeSemesterValue(semester);
    const subjectName = normalizeCurriculumValue(subject);
    if (!course || !semesterName || !subjectName) return false;
    const matchesCourseAndSemester = (rule) => (
      normalizeCurriculumValue(rule.courseKey) === course
      && normalizeSemesterValue(rule.semester) === semesterName
    );
    const subjectRule = getLatestRule(locks.filter((rule) => (
      matchesCourseAndSemester(rule)
      && normalizeCurriculumValue(rule.subject) === subjectName
    )));

    if (subjectRule) return subjectRule.isLocked === true;

    const semesterRule = getLatestRule(locks.filter((rule) => (
      matchesCourseAndSemester(rule)
      && !normalizeCurriculumValue(rule.subject)
    )));

    return semesterRule?.isLocked === true;
  }, [locks]);

  const value = useMemo(() => ({
    locks,
    loading,
    error,
    isLocked,
    refreshLocks
  }), [locks, loading, error, isLocked, refreshLocks]);

  return <CurriculumLockContext.Provider value={value}>{children}</CurriculumLockContext.Provider>;
}

export function useCurriculumLocks() {
  const context = useContext(CurriculumLockContext);
  if (!context) {
    throw new Error('useCurriculumLocks must be used inside a CurriculumLockProvider');
  }
  return context;
}
