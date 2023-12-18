import { headingTree } from '@/layouts/PostLayout/headings'
import 'css/prism.css'
import fs from 'fs'
import matter from 'gray-matter'
import 'katex/dist/katex.css'
import path from 'path'
import { remark } from 'remark'

const postsDirectory = path.join(process.cwd(), 'data/blog')

export async function getHeadingsFromArticle(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const articleData = getArticleDataFromFile(fileContents)

  const processedContent = await processHeadingsFromArticleData(articleData)

  return processedContent.data.headings
}

function getArticleDataFromFile(fileContents) {
  return matter(fileContents)
}

async function processHeadingsFromArticleData(articleData) {
  return await remark().use(headingTree).process(articleData.content)
}
