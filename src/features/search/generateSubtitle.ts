import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

export function generateSubtitle(post: CoreContent<Blog>) {
  const dateSubtitle = new Date(post.date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  const authorsSubtitle = post.authors === undefined ? '' : ` · ${post.authors.join(', ')}`
  const tagsSubtitle = post.tags === undefined ? '' : ` · ${post.tags.join(', ')}`
  const subtitle = `${dateSubtitle}${authorsSubtitle}${tagsSubtitle}`
  return subtitle
}
