import { Avatar, Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { TInfluencer } from '@/models/Influencer'

interface LinkCardProps {
  influencer: TInfluencer
}

export const LinkCard = ({ influencer }: LinkCardProps) => {
  return (
    <Link href={`/influencers/${influencer._id}`}>
      <Box width="100%">
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src={influencer.avatar}
              radius="full"
              fallback="T"
            />
            <Box>
              <Heading>{influencer.name}</Heading>
              <Text as="p" size="2" color="gray">
                {influencer.followers.toLocaleString()} followers
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Link>
  )
}
