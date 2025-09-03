import { Avatar, Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'

interface LinkCardProps {
  influencer: {
    id: number
  }
}

export const LinkCard = ({ influencer }: LinkCardProps) => {
  return (
    <Link href={`/influencers/${influencer.id}`}>
      <Box width="100%">
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
            />
            <Box>
              <Heading>Teodros Girmay</Heading>
              <Text as="p" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Link>
  )
}
