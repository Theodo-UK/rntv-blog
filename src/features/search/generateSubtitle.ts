import { Blog, allAuthors } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

export function generateSubtitle(post: CoreContent<Blog>) {
  const dateSubtitle = new Date(post.date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
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
  const authorsSubtitle = post.authors === undefined ? '' : ` · ${authorNames.join(', ')}`
  const tagsSubtitle = post.tags === undefined ? '' : ` · ${post.tags.join(', ')}`
  const subtitle = `${dateSubtitle}${authorsSubtitle}${tagsSubtitle}`
  return subtitle
}
