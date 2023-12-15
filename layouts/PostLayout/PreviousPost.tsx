import Link from "next/link"

type Props = {
    prev?: {
        path: string
        title: string
    }

}
export const PreviousPost = ({prev}: Props) => {
    return prev && prev.path && (
        <div>
          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Previous Article
          </h2>
          <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            <Link href={`/${prev.path}`}>{prev.title}</Link>
          </div>
        </div>
      )
}