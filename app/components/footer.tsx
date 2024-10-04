import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-4 py-8 mt-auto">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link href="/resume" className="hover:underline">Resume</Link></li>
          </ul>
        </nav>
        <ul className="flex flex-wrap justify-center space-x-4 text-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
              href="/rss"
            >
              <ArrowIcon />
              <span className="ml-1">RSS</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vercel/next.js"
            >
              <ArrowIcon />
              <span className="ml-1">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
              href="https://vercel.com/templates/next.js/portfolio-starter-kit"
            >
              <ArrowIcon />
              <span className="ml-1">View Source</span>
            </a>
          </li>
        </ul>
        <p className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} MIT Licensed
        </p>
      </div>
    </footer>
  )
}
