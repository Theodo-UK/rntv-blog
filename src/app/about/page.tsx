import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'src/app/seo'
import AuthorLayout from 'src/layouts/AuthorLayout'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const moKhazali = allAuthors.find((p) => p.slug === 'default') as Authors
  const secondAuthor = allAuthors.find((p) => p.slug === 'default') as Authors

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Our Goal
          </h1>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p>
            Our goal is to create a consolidative knowledge base for developers who are interested
            in venturing into the realm of building TV apps, particularly those based on React
            Native (RN).
          </p>
          <p>
            Currently, there exists a noticeable gap in readily available information in this
            specialised area, making it an underloved part of the RN ecosystem.
          </p>
          <p>
            We recognise this lack and aim to fill it by establishing a centralised hub where people
            can not only find comprehensive resources and guidance but also feel like they are part
            of a community dedicated to learning and growing in this unique space.
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Editors
          </h1>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <AuthorLayout content={coreContent(moKhazali)}>
            <MDXLayoutRenderer code={moKhazali.body.code} />
          </AuthorLayout>
          <AuthorLayout content={coreContent(moKhazali)}>
            <MDXLayoutRenderer code={moKhazali.body.code} />
          </AuthorLayout>
        </div>
      </div>
    </>
  )
}
