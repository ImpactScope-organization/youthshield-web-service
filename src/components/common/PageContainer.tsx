import clsx from 'clsx'
import React, { FC } from 'react'
import { Container } from '@radix-ui/themes'

interface Props {
  children?: React.ReactNode
  className?: string
}
export const PageContainer: FC<Props> = ({ className, ...props }) => {
  return <Container className={clsx('py-16', className)} {...props} />
}
