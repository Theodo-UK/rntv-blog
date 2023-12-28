'use client'
import { Blog } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import { KBarSearchProvider } from 'pliny/search/KBar'
import { CoreContent } from 'pliny/utils/contentlayer'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        // defaultActions: [
        //   {
        //     id: 'homepage',
        //     name: 'Homepage',
        //     keywords: '',
        //     shortcut: ['h', 'h'],
        //     section: 'Home',
        //     perform: () => router.push('/'),
        //   },
        //   {
        //     id: 'projects',
        //     name: 'Projects',
        //     keywords: '',
        //     shortcut: ['p'],
        //     section: 'Home',
        //     perform: () => router.push('/projects'),
        //   },
        // ],
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => {
            const test = `sss ${post?.summary ?? ''} ${post?.tags?.join(' ') ?? ''} ${
              post.date ?? ''
            } ${post.authors?.join(' ') ?? ''}`
            console.log(test)

            return {
              id: post.path,
              subtitle: `${post.date} | ${post.authors?.join(', ')} | ${post.tags.join(', ')}`,
              perform: () => router.push(post.path),
              name: post.title,
              keywords: `${post?.summary ?? ''} ${post?.tags?.join(',') ?? ''} ${post.date ?? ''} ${
                post.authors?.join(',') ?? ''
              }`,
              //   section: 'I am a section',
              // shortcut: ['i', 'am', 'a', 'shortcut'],
              // icon: 'https://www.google.com/favicon.ico',
              // priority: 1,
            }
          })
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
