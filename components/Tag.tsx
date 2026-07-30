import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="inline-block rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-muted transition-colors hover:border-clay hover:text-clay"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
