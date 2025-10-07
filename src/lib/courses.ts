// lib/courses.ts
import { supabase } from './supabaseClient'

export async function getCoursesBySemester(semester: number) {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('semester', semester)
    .order('code', { ascending: true })

  if (error) throw error
  return data
}
