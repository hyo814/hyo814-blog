/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
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

  const [query, setQuery] = useState('') // 입력창 값
  const [term, setTerm] = useState('') // 실제로 거르는 값

  // 주소의 ?q=로 검색어를 되살린다. 글을 열었다가 뒤로 와도 검색이 남는다.
  useEffect(() => {
    const saved = new URLSearchParams(window.location.search).get('q') ?? ''
    setQuery(saved)
    setTerm(saved)
  }, [])

  // 한글은 ㅌ→트→틀→트리처럼 조합 중간값마다 바뀌어서, 입력이 멈춘 뒤에 거르고 주소에 남긴다
  useEffect(() => {
    const timer = setTimeout(() => {
      setTerm(query)
      const url = new URL(window.location.href)
      if (query.trim()) url.searchParams.set('q', query.trim())
      else url.searchParams.delete('q')
      if (url.href !== window.location.href) window.history.replaceState(null, '', url)
    }, 200)
    return () => clearTimeout(timer)
  }, [query])

  // 끝에 남은 낱자모(ㅌ 같은 조합 중인 글자)는 빼고 거른다
  const q = term
    .trim()
    .toLowerCase()
    .replace(/[ㄱ-ㆎ]+$/, '')
  // 검색어가 있으면 페이지와 상관없이 전체 글에서 바로 거른다
  const displayPosts = q
    ? posts.filter((p) =>
        [p.title, p.summary ?? '', ...(p.tags ?? [])].some((s) => s.toLowerCase().includes(q))
      )
    : initialDisplayPosts.length > 0
      ? initialDisplayPosts
      : posts

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
          <div className="mt-6 flex items-center gap-3">
            <div className="relative w-full">
              {/* 헤더 검색 버튼과 같은 돋보기 */}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="제목·요약·태그 검색"
                aria-label="글 검색"
                // 모바일 16px: 그보다 작으면 iOS Safari가 입력창을 누를 때 화면을 확대한다
                className="w-full rounded border border-muted/75 bg-paper py-2 pl-9 pr-3 text-base text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
            {/* 늘 같은 폭으로 둬서 검색을 시작해도 입력창이 줄지 않는다. 비었을 땐 전체 편수 */}
            <span
              className="measure w-14 shrink-0 text-right text-sm text-muted"
              aria-live="polite"
            >
              {q ? displayPosts.length : posts.length}편
            </span>
          </div>
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
          {q && displayPosts.length === 0 && (
            <p className="py-10 text-center text-sm text-muted">맞는 글이 없습니다.</p>
          )}
          {!q && pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}
