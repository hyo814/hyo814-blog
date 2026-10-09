import Link from 'next/link'

interface Post {
  slug: string
  date: string
  title: string
}

const WEEKS = 53
const DAY = 86_400_000
const LEVEL = ['bg-surface', 'bg-clay/30', 'bg-clay/60', 'bg-clay']

/**
 * 최근 1년 글쓰기 잔디. 서버에서 그리고 끝이라 JS가 없다.
 * ponytail: '오늘'은 빌드 시점 기준이다. main에 푸시할 때마다 다시 빌드되니 충분하다.
 */
export default function ActivityGrid({ posts }: { posts: Post[] }) {
  const byDay = new Map<string, Post[]>()
  for (const p of posts) {
    const d = p.date.slice(0, 10)
    byDay.set(d, [...(byDay.get(d) ?? []), p])
  }

  const now = new Date()
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const start = today - (WEEKS - 1) * 7 * DAY - new Date(today).getUTCDay() * DAY
  const weeks = Array.from({ length: WEEKS }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => start + (w * 7 + d) * DAY).filter((t) => t <= today)
  )
  const yearTotal = posts.filter((p) => Date.parse(p.date.slice(0, 10)) >= start).length

  return (
    <section className="border-t border-line py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">글쓰기 기록</h2>
        <span className="measure text-sm text-muted">최근 1년 {yearTotal}편</span>
      </div>
      <div className="mt-5 flex justify-end gap-[3px]">
        {weeks.map((days, w) => (
          // 좁은 화면에서는 최근 반년만 보인다
          <div
            key={w}
            className={`flex-col gap-[3px] ${w < WEEKS - 26 ? 'hidden sm:flex' : 'flex'}`}
          >
            {days.map((t) => {
              const day = new Date(t).toISOString().slice(0, 10)
              const list = byDay.get(day) ?? []
              const cls = `block h-[11px] w-[11px] rounded-[2px] ${LEVEL[Math.min(list.length, 3)]}`
              if (!list.length) return <span key={day} className={cls} title={day} />
              return (
                <Link
                  key={day}
                  href={`/blog/${list[0].slug}`}
                  className={`${cls} transition-transform hover:scale-125 hover:ring-1 hover:ring-ink`}
                  title={`${day} · ${list.length}편\n${list.map((p) => p.title).join('\n')}`}
                  aria-label={`${day}에 쓴 글 ${list.length}편: ${list[0].title}`}
                />
              )
            })}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted">
        적음
        {LEVEL.map((c) => (
          <span key={c} className={`h-[11px] w-[11px] rounded-[2px] ${c}`} />
        ))}
        많음
      </div>
    </section>
  )
}
