import { getCoursesBySemester } from '@/lib/courses'

interface SemesterPageProps {
    params: { semester: string }
}

export default async function SemesterPage({ params }: SemesterPageProps) {
    const semesterNum = parseInt(params.semester)
    const courses = await getCoursesBySemester(semesterNum)

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Semester {semesterNum} Courses</h1>
            {courses.length === 0 ? (
                <p>No courses found for this semester.</p>
            ) : (
                <ul className="space-y-4">
                    {courses.map((course) => (
                        <li key={course.id} className="border p-4 rounded shadow-sm">
                            <h2 className="text-xl font-semibold">{course.code}: {course.title}</h2>
                            <p>{course.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}
