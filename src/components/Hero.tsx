// components/Hero.tsx

import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative rounded-xl overflow-hidden px-8 py-12 bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-700 text-white shadow-lg mb-12">
            <div className="z-10 max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
                    Join the <span className="text-yellow-300">perfect</span> university learning platform
                </h1>
                <p className="text-xl font-medium mb-6">
                    AI-powered, semester-wise courses. Free forever. University-ready.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#semesters"
                        className="rounded px-6 py-3 font-bold bg-white text-blue-700 hover:bg-yellow-200 shadow-xl transition"
                    >
                        Browse Courses
                    </Link>
                    <Link
                        href="/admin"
                        className="rounded px-6 py-3 font-bold bg-yellow-400 text-blue-900 hover:bg-yellow-300 shadow-xl transition"
                    >
                        Upload Syllabus (Admin)
                    </Link>
                </div>
            </div>
            {/* Decorative blurred shape */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-52 h-52 bg-yellow-400 opacity-40 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 opacity-30 rounded-full blur-2xl" />
            </div>
        </section>
    )
}
