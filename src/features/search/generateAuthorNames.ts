import { Blog, allAuthors } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
export function generateAuthorNames(post: CoreContent<Blog>) {
  const authorNames: string[] = []

  if (post.authors !== undefined) {
    for (const author of post.authors) {
      const authorResults = allAuthors.find((p) => p.slug === author)
      if (authorResults === undefined) {
        continue
      }
      authorNames.push(authorResults.name)
    }
  }

  return authorNames
}
