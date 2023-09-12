import { AUTHOR_TAGLINE } from '../lib/constants'

type Props = {
  taglineElements: JSX.Element;
}

const Intro = () => {
  const taglineElements = getTaglineElements();
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Paul Serra
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        { taglineElements }
      </h4>
    </section>
  )
}

export const getTaglineElements = () => {
  let taglineElements = [];
  let taglineItems = AUTHOR_TAGLINE.split(', ')
  for(const item of taglineItems) {
    taglineElements.push(
      <div>
        {item}
      </div>
    )
  }
  return (
      taglineElements
  )
}

export default Intro
