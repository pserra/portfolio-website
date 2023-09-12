import Link from 'next/link'
import markdownStyles from './markdown-styles.module.css'
import { AUTHOR_NAME } from '../lib/constants'
import React from 'react'
import Image from 'next/image'

type Props = {
    experience: string
}

const MeetAuthor = () => {
  return (
    <div className="w-3/4 flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100 mt-12 mb-12">
        <div className="w-fit">
            <Image
                src='/assets/blog/authors/pserra.jpg'
                alt='Author Photo'
                className={(
                    'md:rounded-none rounded-full'
                )}
                width={299}
                height={299}
            />
        </div>
        <div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-6">
                <div>
                    <p className="text-lg font-medium">
                    “Meeting all the criteria won't matter if you lack a dynamic presence that makes others want to collaborate with you.”
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {AUTHOR_NAME}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Senior Solutions Architect, Data Engineer, Solutions Engineer
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="md:flex rounded-xl p-8 md:p-0 m-12">
            </div>
        </div>
    </div>
  )
}

export default MeetAuthor
