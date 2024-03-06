import { Authors, allAuthors } from 'contentlayer/generated'
import { genPageMetadata } from 'src/app/seo'
import { Editors } from 'src/features/AboutPage/Editors'
import { OurGoal } from 'src/features/AboutPage/OurGoal'
import { SpecialThanks } from 'src/features/AboutPage/SpecialThanks'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const editors = ['default', 'pierrep', 'anisha', 'giolaq']
  const authorsList = allAuthors.filter((p) => editors.includes(p.slug))
  const justinKek = allAuthors.find((p) => p.slug === 'justin_kek') as Authors
  const thanksList = [justinKek]
  return (
    <>
      <OurGoal />
      <Editors authorsList={authorsList} />
      <SpecialThanks authorsList={thanksList} />
    </>
  )
}
