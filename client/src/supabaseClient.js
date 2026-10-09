import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gfyrixfdcolasjdylafx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmeXJpeGZkY29sYXNqZHlsYWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NjcxODEsImV4cCI6MjEwNzA0MzE4MX0.kNNoJiTkJp5d-uSsXLlA4xsrPWBRf22gqAgTvcmt90Y' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)