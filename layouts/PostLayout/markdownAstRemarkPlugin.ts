import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

export function markdownAstRemarkPlugin() {
  return (node, file) => {
    const nodes = {}
    const output = []
    const indexMap = {}
    visit(node, 'heading', (node) => {
      addHtmlIdToMarkdownAstNode(node, nodes)
      transformMarkdownAstToHeadingsTree(node, output, indexMap)
    })
    file.data.headings = output
  }
}

function addHtmlIdToMarkdownAstNode(node, nodes) {
  const id = node.children.map((c) => c.value).join('')
  nodes[id] = (nodes[id] || 0) + 1
  node.data = node.data || {
    hProperties: {
      id: sanitiseIdForHtml(id, nodes),
    },
  }
}

function sanitiseIdForHtml(id, nodes) {
  return `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ''}`
    .replace(/[^a-zA-Z\d\s-]/g, '')
    .split(' ')
    .join('-')
    .toLowerCase()
}
/**
 * It's important to note that for this function to work, the table of contents should have a valid structure, e.g. there are no jumps from node depth 2 straight to depth 4.
 * @param node
 * @param output
 * @param indexMap
 */
function transformMarkdownAstToHeadingsTree(node, output, indexMap) {
  const transformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  }

  if (node.depth === 2) {
    output.push(transformedNode)
    indexMap[node.depth] = transformedNode
  } else {
    const parent = indexMap[node.depth - 1]
    if (parent) {
      parent.children.push(transformedNode)
      indexMap[node.depth] = transformedNode
    }
  }
}
