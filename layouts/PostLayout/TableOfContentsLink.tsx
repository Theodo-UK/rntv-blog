export const TableOfContentsLink = ({ node, depth, sectionNumber }) => {
  const indentationLevels = [
    'pl-4 -indent-4',
    'pl-12 -indent-8',
    'pl-24 -indent-12',
    'pl-36 -indent-16',
    'pl-48 -indent-20',
    'pl-60 -indent-24',
  ]
  return (
    <a href={`#${node.data.hProperties.id}`}>
      <div className={`${indentationLevels[depth]}`}>{`${sectionNumber} ${node.value}`}</div>
    </a>
  )
}
