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

function renderNodes(nodes, depth = 0, parentNumbering: number[] = []) {
  const indentationLevels = ['ml-4', 'ml-8', 'ml-12', 'ml-16', 'ml-20', 'ml-24']

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
            <a className={`${indentationLevels[depth]}`} href={`#${node.data.hProperties.id}`}>
              {`${sectionNumber} ${node.value}`}
            </a>
            {node.children?.length > 0 && renderNodes(node.children, depth + 1, currentNumber)}
          </li>
        )
      })}
    </ul>
  )
}
