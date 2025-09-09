import { Avatar, Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

interface LinkCardProps {
  to: string
  avatarUrl?: string
  title: string
  description: string
  icon?: React.ReactNode
}

export const LinkCard = ({ to, avatarUrl, title, description, icon }: LinkCardProps) => {
  return (
    <Link href={to}>
      <Box width="100%">
        <Card>
          <div className="relative">
            <div className="absolute top-0 right-0">{icon}</div>
          </div>
          <Flex gap="3" align="center">
            {avatarUrl && <Avatar size="3" src={avatarUrl} radius="full" fallback="T" />}
            <Box>
              <Heading>{title}</Heading>
              <Text as="p" size="2" color="gray">
                {description}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Link>
  )
}
