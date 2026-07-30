import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

const GROUPS = ['실무', '사이드 프로젝트', '학부·교육'] as const

export default function Projects() {
  return (
    <div className="pt-6">
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        실무에서 맡은 시스템부터 사이드 프로젝트, 학부 시절 작업까지. 각 항목의 링크에서 맡은 범위와
        선택의 근거를 적은 글로 이어집니다.
      </p>

      {GROUPS.map((group) => {
        const items = projectsData.filter((p) => p.kind === group)
        if (!items.length) return null
        const isWork = group === '실무'

        return (
          <section key={group} className="mt-14">
            <h2 className="flex items-baseline gap-3 font-display text-xl font-bold tracking-tight text-ink">
              {group}
              <span className="measure text-sm font-normal text-muted">{items.length}</span>
            </h2>

            <ul className="mt-5 divide-y divide-line border-t border-line">
              {items.map((p) => (
                <li key={p.title} className="py-6">
                  <article
                    className={isWork ? 'border-l-2 border-clay pl-5' : 'border-l border-line pl-5'}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                        {p.href ? (
                          <Link href={p.href} className="text-ink hover:text-clay">
                            {p.title}
                          </Link>
                        ) : (
                          <span className="text-ink">{p.title}</span>
                        )}
                      </h3>
                      <span className="measure shrink-0 text-sm text-muted">{p.period}</span>
                    </div>

                    <p className="mt-2.5 max-w-2xl text-[15px] leading-7 text-muted">
                      {p.description}
                    </p>

                    {p.stack && <p className="mt-2.5 text-sm text-muted">{p.stack}</p>}

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
                      {p.href && (
                        <Link
                          href={p.href}
                          className="text-clay underline-offset-4 hover:underline"
                        >
                          자세히 &rarr;
                        </Link>
                      )}
                      {p.githubHref && (
                        <Link
                          href={p.githubHref}
                          className="text-muted underline-offset-4 hover:text-ink hover:underline"
                        >
                          GitHub &rarr;
                        </Link>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
