'use client'

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
  const indentationLevels = [
    'pl-4 -indent-4',
    'pl-12 -indent-8',
    'pl-24 -indent-12',
    'pl-36 -indent-16',
    'pl-48 -indent-20',
    'pl-60 -indent-24',
  ]

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
            <a href={`#${node.data.hProperties.id}`}>
              <div className={`${indentationLevels[depth]}`}>
                {`${sectionNumber} ${node.value}`}
              </div>
            </a>
            {node.children?.length > 0 && renderNodes(node.children, depth + 1, currentNumber)}
          </li>
        )
      })}
    </ul>
  )
}
