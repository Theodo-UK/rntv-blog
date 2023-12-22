'use client'

import { useEffect, useRef, useState } from 'react'

export function useActiveSection(id) {
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
