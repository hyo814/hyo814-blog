import Link from 'next/link'
import { ReactNode } from 'react'

export interface Preview {
  title: string
  summary?: string
  date: string
}

interface Props {
  href: string
  preview: Preview
  children: ReactNode
}

// ponytail: CSS hover/focus만으로 띄운다. 터치 기기에서는 카드 없이 링크로만 동작한다.
export default function PreviewLink({ href, preview, children }: Props) {
  return (
    <span className="group relative">
      <Link href={href}>{children}</Link>
      <span
        role="tooltip"
        className="not-prose pointer-events-none invisible absolute left-0 top-full z-30 mt-2 block w-80 max-w-[80vw] rounded border border-line bg-paper p-4 opacity-0 shadow-raise transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 [@media(hover:hover)]:group-hover:visible [@media(hover:hover)]:group-hover:opacity-100"
      >
        <span className="measure block text-xs text-muted">{preview.date.slice(0, 10)}</span>
        <span className="mt-1 block font-display text-base font-bold leading-snug text-ink">
          {preview.title}
        </span>
        {preview.summary && (
          <span className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
            {preview.summary}
          </span>
        )}
      </span>
    </span>
  )
}
