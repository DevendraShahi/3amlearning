import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SemesterCards from '@/components/SemesterCards'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <SemesterCards />
      </main>
    </div>
  )
}
