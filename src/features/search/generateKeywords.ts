import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { generateAuthorNames } from './generateAuthorNames'

export function generateKeywords(post: CoreContent<Blog>) {
  const titleKeywords = post?.title?.split(' ').join(',') ?? ''
  const summaryKeywords = post?.summary?.split(' ').join(',') ?? ''
  const tagsKeywords = post?.tags?.join(',') ?? ''
  const authorNames = generateAuthorNames(post)
  const authorKeywords = authorNames.join(',')

  const keywords = `${titleKeywords},${summaryKeywords},${tagsKeywords},${
    post.date ?? ''
  },${authorKeywords}`
  return keywords
}
