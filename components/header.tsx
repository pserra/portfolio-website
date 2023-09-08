import Link from 'next/link'
import { AUTHOR_NAME } from '../lib/constants'

const Header = () => {
  return (
    <div>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Paul Serra
      </Link>
      .
      &nbsp;<span className="text-xs">Data Engineer / Market Enthusiest</span>
    </h2>
    </div>
  )
}

export default Header
