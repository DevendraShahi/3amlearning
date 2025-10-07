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

export async function getAllSemesters() {
  const { data, error } = await supabase
    .from('courses')
    .select('semester')
    .order('semester', { ascending: true })

  if (error) throw error

  // Extract unique semesters from the courses (if duplicates exist)
  const semesters = Array.from(new Set(data.map((c) => c.semester)))
  return semesters
}