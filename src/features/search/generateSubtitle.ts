import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { generateAuthorNames } from './generateAuthorNames'

export function generateSubtitle(post: CoreContent<Blog>) {
  const dateSubtitle = new Date(post.date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  const authorNames = generateAuthorNames(post)
  const authorsSubtitle = post.authors === undefined ? '' : ` · ${authorNames.join(', ')}`
  const tagsSubtitle = post.tags === undefined ? '' : ` · ${post.tags.join(', ')}`
  const subtitle = `${dateSubtitle}${authorsSubtitle}${tagsSubtitle}`
  return subtitle
}
