import Link from "next/link"

type Props = {
    next?: {
        path: string
        title: string
    }
}
export const NextPost = ({ next }: Props) => {
    return  next && next.path && (
        <div>
          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Next Article
          </h2>
          <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            <Link href={`/${next.path}`}>{next.title}</Link>
          </div>
        </div>
      )}