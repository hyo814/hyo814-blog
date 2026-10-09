import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import ActivityGrid from '@/components/ActivityGrid'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="pb-10 pt-8 sm:pt-12">
        <h1 className="max-w-3xl font-display text-[2.1rem] font-bold leading-tight tracking-tight text-ink sm:text-5xl sm:leading-[1.15]">
          개발자와 비개발자 사이를
          <br />더 가까이
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          모호한 요구사항은 사용자에게 더 적합하도록, 개발자에게는 사용자의 니즈를 파악하기 쉽도록
          하는 역할이 프론트엔드 개발자의 역량이라 생각이 됩니다. 2021년 4월부터 웹 개발자로 개발을
          하면서 다양한 시도를 하기 위해 블로그를 작성하게 되었습니다.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
          <Link
            href="/tags/경력기술서"
            className="rounded bg-clayfield px-4 py-2.5 text-sm font-medium text-[#F7F3EC] shadow-raise transition-opacity hover:opacity-90"
          >
            경력기술서 3편 읽기
          </Link>
        </div>
      </section>

      <ActivityGrid posts={posts} />

      <section className="border-t border-line pt-12">
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
