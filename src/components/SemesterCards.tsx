import Link from 'next/link'
import { getAllSemesters } from '@/lib/courses'
import { AcademicCapIcon } from '@heroicons/react/24/solid'

export default async function SemesterCards() {
    const semesters = await getAllSemesters()

    return (
        <section id="semesters" className="max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Browse by Semester</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {semesters.map((sem) => (
                    <Link href={`/semester/${sem}`} key={sem}>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:scale-105 duration-150">
                            <AcademicCapIcon className="w-10 h-10 text-indigo-500 mb-2" />
                            <div className="text-xl font-bold mb-1">Semester {sem}</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">
                                Explore all courses for semester {sem}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
