'use client'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <Image
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      
      className={clsx('max-w-1/2 w-full h-[34px]', className)}
      src="https://abcforsikring.dk/wp-content/uploads/2021/10/Logo_blaa.png"
    />
  )
}
