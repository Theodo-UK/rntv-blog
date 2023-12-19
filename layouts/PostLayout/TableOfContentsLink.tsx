'use client'
import { useEffect, useRef, useState } from 'react'

function useHighlighted(id) {
  const observer = useRef()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          if (entry.target.id === activeId) {
            return
          }
          setActiveId(entry.target.id)
          console.log(`entry.target.id: ${entry.target.id}`)
        }
      })
    }
    //@ts-ignore
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -90% 0px',
    })

    const elements = document.querySelectorAll('h2, h3, h4')
    //@ts-ignore
    elements.forEach((elem) => observer.current.observe(elem))
    //@ts-ignore
    return () => observer.current.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isActiveId: activeId === id, setActiveId }
}

export const TableOfContentsLink = ({ node, depth, sectionNumber }) => {
  const indentationLevels = [
    'pl-4 -indent-4',
    'pl-12 -indent-8',
    'pl-24 -indent-12',
    'pl-36 -indent-16',
    'pl-48 -indent-20',
    'pl-60 -indent-24',
  ]
  const id = node.data.hProperties.id

  const { isActiveId } = useHighlighted(id)
  return (
    <a
      href={`#${id}`}
      //   onClick={(e) => {
      //     e.preventDefault()
      //     setActiveId(id)
      //   }}
    >
      <div
        className={`${isActiveId && 'text-blue-400'} ${indentationLevels[depth]}`}
      >{`${sectionNumber} ${node.value}`}</div>
    </a>
  )
}
