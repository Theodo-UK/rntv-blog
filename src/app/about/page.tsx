import { Authors, allAuthors } from 'contentlayer/generated'
import { genPageMetadata } from 'src/app/seo'
import { Editors } from 'src/features/AboutPage/Editors'
import { OurGoal } from 'src/features/AboutPage/OurGoal'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const moKhazali = allAuthors.find((p) => p.slug === 'default') as Authors
  // Add yourself as an editor here
  // const secondAuthor = allAuthors.find((p) => p.slug === 'default') as Authors
  const authorsList = [
    moKhazali,
    moKhazali,
    // secondAuthor
  ]
  return (
    <>
      <OurGoal />
      <Editors authorsList={authorsList} />
    </>
  )
}
