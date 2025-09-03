import clsx from 'clsx'
import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}
export const Container: FC<Props> = ({ className, ...props }) => {
  return <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6', className)} {...props} />
}
