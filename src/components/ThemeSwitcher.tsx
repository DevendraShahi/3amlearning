// components/ThemeSwitcher.tsx

'use client'
import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(
        () => window?.matchMedia('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
    }, [isDark])

    return (
        <div className="flex items-center gap-3">
            <Switch checked={isDark} onCheckedChange={setIsDark} id="theme-toggle" />
            <label htmlFor="theme-toggle" className="text-sm">{isDark ? 'Dark' : 'Light'} Mode</label>
        </div>
    )
}
