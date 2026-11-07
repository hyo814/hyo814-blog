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
import PostToc, { ReadingProgress, type TocItem } from '@/components/PostToc'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

// ponytail: 시리즈가 하나뿐이라 태그로 묶는다. 둘째 시리즈가 생기면 frontmatter에 series 필드를 둔다.
const SERIES = {
  tag: '교통데이터플랫폼',
  name: '교통 데이터 플랫폼 작업기',
  intro:
    '2025년 4월부터 일하고 있는 교통 분야 데이터 플랫폼에서 겪은 일을 적은 시리즈입니다. 교통 분야 국제 표준의 데이터 사전과 차량 통신 메시지 규격을 등록 신청·심사·공개하는 Django 서비스입니다.',
  overview: '/blog/2025년도~현재의-교통-데이터-플랫폼',
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
  // contentlayer 타입은 string이지만 실제 값은 제목 배열이다
  const toc = ((content as { toc?: unknown }).toc as TocItem[] | undefined) ?? []
  const showToc = toc.length >= 3

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <ReadingProgress />
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

        {tags?.includes(SERIES.tag) && (
          <aside className="measure mt-8 rounded border border-line bg-surface p-4 text-sm text-muted">
            <p>
              <span className="font-semibold text-ink">{SERIES.name}</span> — {SERIES.intro}
            </p>
            <p className="mt-2">
              <Link
                href={`/tags/${SERIES.tag}`}
                className="text-clay underline-offset-4 hover:underline"
              >
                시리즈 글 전체
              </Link>
              {' · '}
              <Link href={SERIES.overview} className="text-clay underline-offset-4 hover:underline">
                프로젝트 한눈에 보기
              </Link>
            </p>
          </aside>
        )}

        <div className={showToc ? 'xl:grid xl:grid-cols-[minmax(0,1fr)_13rem] xl:gap-12' : ''}>
          <div className="prose max-w-none py-10 dark:prose-invert">{children}</div>
          {showToc && <PostToc toc={toc} />}
        </div>

        {/* 검색으로 이 글에 바로 들어온 독자를 위한 안내. 헤더를 거치지 않아도 완결된다. */}
        <aside className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center">
          <Monogram size={48} compact className="shrink-0 rounded" />
          <div>
            <p className="text-sm text-ink">
              <span className="font-semibold">{authorDetails[0]?.name ?? siteMetadata.author}</span>
              {' · '}
              <span className="text-muted">2021년부터 일해 온 웹 개발자</span>
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
