import type { Authors } from 'contentlayer/generated'
import Link from 'next/link'
import { CoreContent } from 'pliny/utils/contentlayer'

type Props = {
  author: CoreContent<Authors>
}
export const AuthorLinkedIn = ({ author }: Props) => {
  return (
    <>
      <dt className="sr-only">LinkedIn</dt>
      <dd>
        {author.linkedin && (
          <Link
            href={author.linkedin}
            className="text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {author.linkedin.replace('https://www.linkedin.com/in/', '@')}
          </Link>
        )}
      </dd>
    </>
  )
}
