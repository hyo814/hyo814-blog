import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Monogram from '@/components/Monogram'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, occupation, company, email, twitter, linkedin, github } = content

  return (
    <div className="pt-6">
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        About
      </h1>

      <div className="mt-10 items-start gap-x-12 xl:grid xl:grid-cols-3">
        <aside className="xl:sticky xl:top-24">
          <Monogram size={168} className="rounded shadow-raise" />
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">{name}</h2>
          <p className="mt-1 text-sm text-muted">{occupation}</p>
          <p className="text-sm text-muted">{company}</p>
          <div className="mt-5 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
            <SocialIcon kind="github" href={github} size={5} />
            <SocialIcon kind="linkedin" href={linkedin} size={5} />
            <SocialIcon kind="x" href={twitter} size={5} />
          </div>
        </aside>

        <div className="prose mt-10 max-w-none pb-8 dark:prose-invert xl:col-span-2 xl:mt-0">
          {children}
        </div>
      </div>
    </div>
  )
}
