import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

/**
 * 홈의 지표 밴드. 세 수치 모두 단독 작업이고, 각각 측정 과정을 적은 글로 이어진다.
 * 근거 글이 없는 수치는 이 밴드에 올리지 않는다.
 */
const measurements = [
  {
    label: '목업 시드 자동화',
    before: '수작업 49건',
    after: '엑셀 기반 478건',
    href: '/blog/목업-데이터-엑셀-시드-49에서-478개-자동화',
  },
  {
    label: '메타클래스 목록 쿼리',
    before: '908쿼리 · 1.6s',
    after: '4쿼리 · 180ms',
    href: '/blog/메타클래스-쿼리-최적화-회고',
  },
  {
    label: '메뉴 QA 스윕 자동화',
    before: '손으로 136종 확인',
    after: '1커맨드 · 문서오류 15건 적발',
    href: '/blog/playwright-메뉴-136종-qa-스윕',
  },
]

export default function Home({ posts }) {
  return (
    <>
      <section className="pb-10 pt-8 sm:pt-12">
        <h1 className="max-w-3xl font-display text-[2.1rem] font-bold leading-tight tracking-tight text-ink sm:text-5xl sm:leading-[1.15]">
          먼저 움직여서
          <br />
          결과로 말합니다
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          2021년부터 웹을 만들어 온 풀스택 개발자 임효진입니다. 프런트엔드 주력으로 시작해 지금은
          필요한 데이터를 목업으로 먼저 세워 화면을 검증하고, Django API와 쿼리까지 이어 붙입니다.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
          <Link
            href="/tags/경력기술서"
            className="rounded bg-clayfield px-4 py-2.5 text-sm font-medium text-[#F7F3EC] shadow-raise transition-opacity hover:opacity-90"
          >
            경력기술서 3편 읽기
          </Link>
          <Link
            href="/projects"
            className="rounded border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            프로젝트
          </Link>
          <Link
            href="/timeline"
            className="px-2 py-2.5 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            타임라인
          </Link>
        </div>
      </section>

      {/* 점토색이 면을 소유한다. 수치는 전부 근거 글로 가는 문이다. */}
      <section aria-labelledby="measured-heading" className="-mx-4 bg-clayfield px-4 py-8 sm:px-8">
        <h2 id="measured-heading" className="font-sans text-xs font-semibold text-[#F7F3EC]/90">
          측정 기록
        </h2>
        <dl className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-3">
          {measurements.map((m, i) => (
            <div
              key={m.label}
              className="animate-settle border-t border-[#F7F3EC]/35 pt-4"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <dt className="text-sm text-[#F7F3EC]/95">{m.label}</dt>
              <dd className="measure mt-2 flex flex-wrap items-baseline gap-x-2 font-display">
                <span className="text-base text-[#F7F3EC]/90 line-through decoration-[#F7F3EC]/60">
                  {m.before}
                </span>
                <span aria-hidden="true" className="text-sm text-[#F7F3EC]/90">
                  →
                </span>
                <span className="text-lg font-bold text-[#F7F3EC] sm:text-xl">{m.after}</span>
              </dd>
              <Link
                href={m.href}
                className="mt-2.5 inline-block text-sm text-[#F7F3EC] underline decoration-[#F7F3EC]/60 underline-offset-4 transition-colors hover:text-[#F7F3EC] hover:decoration-[#F7F3EC]"
              >
                측정 과정 보기
              </Link>
            </div>
          ))}
        </dl>
      </section>

      <section className="pt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">최근 글</h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-clay underline-offset-4 hover:underline"
          >
            전체 {posts.length}편
          </Link>
        </div>

        <ul className="mt-2 divide-y divide-line">
          {!posts.length && <li className="py-8 text-muted">아직 글이 없습니다.</li>}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8">
                <article>
                  <dl>
                    <dt className="sr-only">발행일</dt>
                    <dd className="measure text-sm text-muted">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                    <Link href={`/blog/${slug}`} className="text-ink hover:text-clay">
                      {title}
                    </Link>
                  </h3>
                  {tags?.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-x-1.5 gap-y-1">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  )}
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">{summary}</p>
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
