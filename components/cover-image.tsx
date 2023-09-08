import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div
      style={{ backgroundImage: `url(${src})`}}
      className="w-full max-h-96 overflow-hidden bg-cover bg-center justify-center">
      <div className="backdrop-blur-xl">
      <Image
        src={src}
        style={{ margin: 'auto' }}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-sm', {
          'hover:shadow-lg transition-shadow duration-200 max-h-96 place-self-center object-cover md:filter-none m-auto': slug,
        })}
        width={1300}
        height={630}
      />
      </div>    

    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
