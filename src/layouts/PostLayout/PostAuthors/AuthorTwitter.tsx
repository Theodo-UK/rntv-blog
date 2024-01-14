import type { Authors } from 'contentlayer/generated'
import Link from 'next/link'
import { CoreContent } from 'pliny/utils/contentlayer'

type Props = {
  author: CoreContent<Authors>
}
export const AuthorTwitter = ({ author }: Props) => {
  return (
    <>
      <dt className="sr-only">Twitter</dt>
      <dd>
        {author.twitter && (
          <Link
            href={author.twitter}
            className="text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {author.twitter.replace('https://twitter.com/', '@')}
          </Link>
        )}
      </dd>
    </>
  )
}
