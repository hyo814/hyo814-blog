import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Monogram from './Monogram'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 -mx-4 mb-4 border-b border-line bg-paper/85 px-4 backdrop-blur-sm">
      <div className="flex items-center justify-between py-5">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
          <Monogram size={30} compact className="shrink-0" />
          <span className="ml-3 font-display text-xl font-bold tracking-tight text-ink">
            Hyo814
          </span>
          <span className="ml-3 hidden border-l border-line pl-3 text-sm text-muted md:inline">
            풀스택 개발자
          </span>
        </Link>

        <div className="flex items-center gap-x-1 sm:gap-x-2">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden rounded px-2.5 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink sm:block"
              >
                {link.title}
              </Link>
            ))}
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
