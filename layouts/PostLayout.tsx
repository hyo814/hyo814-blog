import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import Monogram from '@/components/Monogram'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="pt-6">
        <header className="border-b border-line pb-8">
          <dl>
            <dt className="sr-only">발행일</dt>
            <dd className="measure text-sm text-muted">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </dd>
          </dl>
          <h1 className="mt-3 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:text-4xl sm:leading-[1.2]">
            {title}
          </h1>
          {tags?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-1.5 gap-y-1">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
        </header>

        <div className="prose max-w-none py-10 dark:prose-invert">{children}</div>

        {/* 검색으로 이 글에 바로 들어온 독자를 위한 안내. 헤더를 거치지 않아도 완결된다. */}
        <aside className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center">
          <Monogram size={48} compact className="shrink-0 rounded" />
          <div>
            <p className="text-sm text-ink">
              <span className="font-semibold">{authorDetails[0]?.name ?? siteMetadata.author}</span>
              {' · '}
              <span className="text-muted">2021년부터 웹을 만들어 온 풀스택 개발자</span>
            </p>
            <p className="mt-1.5 text-sm text-muted">
              <Link href="/about" className="text-clay underline-offset-4 hover:underline">
                소개
              </Link>
              {' · '}
              <Link
                href="/tags/경력기술서"
                className="text-clay underline-offset-4 hover:underline"
              >
                경력기술서
              </Link>
              {' · '}
              <Link href="/projects" className="text-clay underline-offset-4 hover:underline">
                프로젝트
              </Link>
            </p>
          </div>
        </aside>

        {(next || prev) && (
          <nav className="grid gap-4 border-t border-line py-8 sm:grid-cols-2">
            {prev?.path ? (
              <Link
                href={`/${prev.path}`}
                className="rounded border border-line p-4 transition-colors hover:bg-surface"
              >
                <span className="text-xs text-muted">이전 글</span>
                <span className="mt-1 block font-display font-bold leading-snug text-ink">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next?.path && (
              <Link
                href={`/${next.path}`}
                className="rounded border border-line p-4 transition-colors hover:bg-surface sm:text-right"
              >
                <span className="text-xs text-muted">다음 글</span>
                <span className="mt-1 block font-display font-bold leading-snug text-ink">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        )}

        {siteMetadata.comments && (
          <div className="border-t border-line pt-8" id="comment">
            <Comments slug={slug} />
          </div>
        )}

        <div className="border-t border-line py-8">
          <Link
            href={`/${basePath}`}
            className="text-sm font-medium text-clay underline-offset-4 hover:underline"
            aria-label="글 목록으로"
          >
            &larr; 글 목록으로
          </Link>
        </div>
      </article>
    </SectionContainer>
  )
}
