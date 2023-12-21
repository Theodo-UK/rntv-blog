import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Our Vision
          </h1>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p>
            Our vision at ReactNativeTV.com is to be the premier destination for everything React
            Native in the world of television. We aim to centralize and simplify learning, offering
            an extensive repository of resources, tutorials, and insights. Our goal is to empower
            developers of all levels to harness the full potential of React Native in creating
            innovative TV applications, bridging the gap between traditional TV experiences and
            cutting-edge technology.
          </p>
        </div>
      </div>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
