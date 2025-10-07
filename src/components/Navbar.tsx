import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
    return (
        <nav className="w-full border-b shadow-lg bg-white dark:bg-gray-900 px-8 py-4 flex items-center justify-between">
            <div className="flex gap-6 items-center">
                <Link href="/" className="text-2xl font-extrabold text-blue-600 dark:text-blue-300">3AMLearn</Link>
                <Link href="#" className="hover:text-yellow-500 font-semibold transition">Features</Link>
                <Link href="#semesters" className="hover:text-indigo-400 font-semibold transition">Courses</Link>
                <Link href="/admin" className="hover:text-green-400 font-semibold transition">Admin</Link>
            </div>
            <div className="flex gap-6 items-center">
                <ThemeSwitcher />
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700" />
            </div>
        </nav>
    )
}
