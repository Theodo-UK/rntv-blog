import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

export function generateKeywords(post: CoreContent<Blog>) {
  const titleKeywords = post?.title?.split(' ').join(',') ?? ''
  const summaryKeywords = post?.summary?.split(' ').join(',') ?? ''
  const tagsKeywords = post?.tags?.join(',') ?? ''
  const authorKeywords = post?.authors?.join(',') ?? ''
  const keywords = `${titleKeywords},${summaryKeywords},${tagsKeywords},${
    post.date ?? ''
  },${authorKeywords}`
  return keywords
}
