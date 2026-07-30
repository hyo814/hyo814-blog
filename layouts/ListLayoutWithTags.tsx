/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from 'next/link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages
  return (
    <nav className="mt-10 flex items-center justify-between border-t border-line pt-6 text-sm">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          rel="prev"
          className="rounded border border-line px-3 py-2 font-medium text-ink transition-colors hover:bg-surface"
        >
          &larr; 이전
        </Link>
      ) : (
        <span className="rounded border border-line px-3 py-2 text-muted opacity-50">
          &larr; 이전
        </span>
      )}
      <span className="measure text-muted">
        {currentPage} / {totalPages}
      </span>
      {nextPage ? (
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          rel="next"
          className="rounded border border-line px-3 py-2 font-medium text-ink transition-colors hover:bg-surface"
        >
          다음 &rarr;
        </Link>
      ) : (
        <span className="rounded border border-line px-3 py-2 text-muted opacity-50">
          다음 &rarr;
        </span>
      )}
    </nav>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="pt-6">
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:hidden">
        {title}
      </h1>

      <div className="sm:flex sm:gap-x-12">
        <aside className="hidden max-h-[calc(100vh-8rem)] min-w-[240px] max-w-[240px] shrink-0 overflow-auto border-r border-line pr-6 sm:sticky sm:top-24 sm:block">
          {pathname.startsWith('/blog') ? (
            <h2 className="font-display text-base font-bold text-clay">전체 글</h2>
          ) : (
            <Link
              href={`/blog`}
              className="font-display text-base font-bold text-ink transition-colors hover:text-clay"
            >
              전체 글
            </Link>
          )}
          <ul className="mt-4 space-y-1">
            {sortedTags.map((t) => {
              const active = pathname.split('/tags/')[1] === slug(t)
              return (
                <li key={t}>
                  <Link
                    href={`/tags/${slug(t)}`}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-baseline justify-between gap-2 rounded px-2 py-1.5 text-sm transition-colors ${
                      active
                        ? 'bg-surface font-semibold text-clay'
                        : 'text-muted hover:bg-surface hover:text-ink'
                    }`}
                  >
                    <span className="truncate">{t}</span>
                    <span className="measure shrink-0 text-xs text-muted">{tagCounts[t]}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>

        <div className="min-w-0 flex-1">
          <h1 className="hidden font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:block sm:text-4xl">
            {title}
          </h1>
          <ul className="mt-6 divide-y divide-line border-t border-line">
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post
              return (
                <li key={path} className="py-7">
                  <article>
                    <dl>
                      <dt className="sr-only">발행일</dt>
                      <dd className="measure text-sm text-muted">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <h2 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight">
                      <Link href={`/${path}`} className="text-ink hover:text-clay">
                        {title}
                      </Link>
                    </h2>
                    {tags?.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-x-1.5 gap-y-1">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    )}
                    <p className="mt-3 text-[15px] leading-7 text-muted">{summary}</p>
                  </article>
                </li>
              )
            })}
          </ul>
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}
