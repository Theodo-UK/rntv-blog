'use client'
import { Blog } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import { KBarSearchProvider } from 'pliny/search/KBar'
import { CoreContent } from 'pliny/utils/contentlayer'
import { generateKeywords } from './generateKeywords'
import { generateSubtitle } from './generateSubtitle'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => {
            const subtitle = generateSubtitle(post)
            const keywords = generateKeywords(post)

            return {
              id: post.path,
              subtitle,
              perform: () => router.push(post.path),
              name: post.title,
              keywords,
            }
          })
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
