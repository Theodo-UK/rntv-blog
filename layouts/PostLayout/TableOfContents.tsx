'use client'

export const TableOfContents = ({ nodes }) => {
  if (!nodes?.length) {
    return null
  }

  return (
    <div className={'toc'}>
      <h3 className={'secondary-text'}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  )
}

function renderNodes(nodes) {
  const indentationLevels = ['ml-4', 'ml-8', 'ml-12', 'ml-16', 'ml-20', 'ml-24']
  return (
    <ul>
      {nodes.map((node) => {
        return (
          <li key={node.data.hProperties.id}>
            <a
              className={`${indentationLevels[node.depth - 1]}`}
              href={`#${node.data.hProperties.id}`}
            >
              {node.value}
            </a>
            {node.children?.length > 0 && renderNodes(node.children)}
          </li>
        )
      })}
    </ul>
  )
}
