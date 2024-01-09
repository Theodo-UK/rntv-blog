import type { Authors } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

type Props = {
  author: CoreContent<Authors>
}
export const AuthorOccupation = ({ author }: Props) => {
  return (
    <>
      <dt className="sr-only">Occupation</dt>
      <dd>
        {author.occupation && (
          <div className="text-xs  text-gray-500 dark:text-gray-200">
            <p>{author.occupation}</p>
          </div>
        )}
      </dd>
    </>
  )
}
