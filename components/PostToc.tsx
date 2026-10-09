'use client'

import { useEffect, useRef, useState } from 'react'

export interface TocItem {
  value: string
  url: string
  depth: number
}

export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left scale-x-0 bg-clay"
    />
  )
}

export default function PostToc({ toc }: { toc: TocItem[] }) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const headings = toc
      .map((t) => document.getElementById(decodeURIComponent(t.url.slice(1))))
      .filter((el): el is HTMLElement => el !== null)
    // 화면 위쪽 1/3 선을 지나간 마지막 제목을 현재 섹션으로 본다.
    const onScroll = () => {
      const passed = headings.filter((h) => h.getBoundingClientRect().top < window.innerHeight / 3)
      setActive((passed[passed.length - 1] ?? headings[0])?.id ?? '')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [toc])

  return (
    <nav
      aria-label="목차"
      className="sticky top-24 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto py-10 xl:block"
    >
      <p className="text-xs font-semibold text-muted">목차</p>
      <ul className="mt-3 space-y-2 border-l border-line text-sm">
        {toc.map((t) => {
          const id = decodeURIComponent(t.url.slice(1))
          const on = id === active
          return (
            <li key={t.url}>
              <a
                href={t.url}
                aria-current={on ? 'location' : undefined}
                className={`-ml-px block border-l leading-snug transition-colors ${
                  on ? 'border-clay text-clay' : 'border-transparent text-muted hover:text-ink'
                }`}
                style={{ paddingLeft: `${(t.depth - 1) * 0.75}rem` }}
              >
                {t.value}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
