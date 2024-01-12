import type { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { AuthorOccupation } from './AuthorOccupation'
import { AuthorTwitter } from './AuthorTwitter'
type Props = {
  authorDetails: CoreContent<Authors>[]
}
export const PostAuthors = ({ authorDetails }: Props) => {
  return (
    <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="items-left flex flex-col gap-4">
          {authorDetails.map((author) => (
            <li className="justify-content flex items-center gap-2" key={author.name}>
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width={38}
                  height={38}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
              <dl className="text-sm font-medium leading-5">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                <AuthorTwitter author={author} />
                <AuthorOccupation author={author} />
              </dl>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}
