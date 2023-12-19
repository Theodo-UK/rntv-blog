'use client'

import { TableOfContentsLink } from './TableOfContentsLink'

export const TableOfContents = ({ nodes }) => {
  if (!nodes?.length) {
    return null
  }

  return (
    <div className={'toc p-2'}>
      <h3 className={'font-bold underline'}>Table of Contents</h3>
      {renderNodes(nodes)}
    </div>
  )
}

function renderNodes(nodes, depth = 0, parentNumbering: number[] = []) {
  return (
    <ul>
      {nodes.map((node, index) => {
        if (node.depth > 4) {
          return
        }
        const currentNumber = depth === 0 ? [index + 1] : [...parentNumbering, index + 1]
        const sectionNumber = currentNumber.join('.')

        return (
          <li key={node.data.hProperties.id}>
            <TableOfContentsLink node={node} depth={depth} sectionNumber={sectionNumber} />
            {node.children?.length > 0 && renderNodes(node.children, depth + 1, currentNumber)}
          </li>
        )
      })}
    </ul>
  )
}
