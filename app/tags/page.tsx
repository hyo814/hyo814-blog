import Link from '@/components/Link'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <div className="pt-6">
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        Tags
      </h1>
      <ul className="mt-10 flex flex-wrap gap-2">
        {tagKeys.length === 0 && 'No tags found.'}
        {sortedTags.map((t) => (
          <li key={t}>
            <Link
              href={`/tags/${slug(t)}`}
              className="inline-flex items-baseline gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-ink transition-colors hover:border-clay hover:text-clay"
              aria-label={`View posts tagged ${t}`}
            >
              {t.split(' ').join('-')}
              <span className="measure text-xs text-muted">{tagCounts[t]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
