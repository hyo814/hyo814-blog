import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Monogram from './Monogram'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line pt-10">
      <div className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href="/" className="flex items-center" aria-label={siteMetadata.headerTitle}>
            <Monogram size={34} compact className="shrink-0" />
            <span className="ml-3 font-display text-lg font-bold tracking-tight text-ink">
              Hyo814
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            2021년부터 웹을 만들어 온 풀스택 개발자입니다. 이 블로그의 성과 수치에는 측정 과정을
            적은 글이 근거로 달려 있습니다.
          </p>
          <div className="mt-5 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          </div>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm sm:text-right">
          <Link href="/tags/경력기술서" className="text-muted transition-colors hover:text-clay">
            경력기술서
          </Link>
          <Link href="/projects" className="text-muted transition-colors hover:text-clay">
            프로젝트
          </Link>
          <Link href="/timeline" className="text-muted transition-colors hover:text-clay">
            타임라인
          </Link>
          <Link href="/blog" className="text-muted transition-colors hover:text-clay">
            전체 글
          </Link>
          <Link href="/feed.xml" className="text-muted transition-colors hover:text-clay">
            RSS
          </Link>
        </nav>
      </div>

      <div className="border-t border-line py-6 text-sm text-muted">
        {`© ${new Date().getFullYear()} `}
        {siteMetadata.author}
      </div>
    </footer>
  )
}
