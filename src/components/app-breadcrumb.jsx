'use client'

import { usePathname } from "next/navigation"
import React, {  useEffect, useMemo, useState } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb"

// AppBreadcrumb dynamically generates breadcrumb navigation based on the current path
export function AppBreadcrumb() {
  const pathname = usePathname()

  const [mounted, setMounted] = useState(false)
    // Set mounted to true after first render (avoids hydration issues)
  useEffect(() => {
    setMounted(true)
  }, [])
  const pathName = usePathname()
  // Generate breadcrumb items from the current path
  const breadcrumbs = useMemo(() => {
        // Split pathname into segments and remove empty strings
    const segments = pathname.split('/').filter(Boolean)
        // Map segments to breadcrumb objects
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
            // Convert segment text from kebab-case to "Title Case"
      const text = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return {
        text,
        path,
        isLast: index === segments.length - 1
      }
    })
  }, [pathname])

  // Early return: hide breadcrumbs on login page, before mount, or if empty
  if (pathName === '/login' || !mounted || breadcrumbs.length === 0) {
    return null
  }



  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className='flex-wrap'>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <BreadcrumbItem
                className={`flex-none ${index === 0 ? 'hidden md:flex' : 'flex'}`}
              >
                <BreadcrumbLink href={breadcrumb.path} className='truncate'>
                  {breadcrumb.text}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator className='mx-2' />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>


    </>
  )
}
