import { Authors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import AuthorLayout from 'src/layouts/AuthorLayout'

type Props = {
  authorsList: Authors[]
}
export const Editors = ({ authorsList }: Props) => {
  return (
    <div className="divide-y-4 divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Editors
        </h1>
      </div>
      <div className="space-y-2 divide-y pb-8 pt-6 md:space-y-5">
        {authorsList.map((author) => {
          return (
            <AuthorLayout key={author._id} content={coreContent(author)}>
              <MDXLayoutRenderer code={author.body.code} />
            </AuthorLayout>
          )
        })}
      </div>
    </div>
  )
}
