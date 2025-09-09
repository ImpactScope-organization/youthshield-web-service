import { Flex, Heading, Grid } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'
import { PageContainer } from '@/components/common/PageContainer'
import { serverClient } from '@/trpc/client/server-client'

export default async () => {
  const influencers = await serverClient.influencers.all()

  return (
    <PageContainer>
      <Flex gap="4" direction="column">
        <Heading>Influencers</Heading>
        <Grid gap="4" columns="3">
          {influencers &&
            influencers.map((influencer) => (
              <LinkCard
                key={influencer._id}
                to={`/influencers/${influencer._id}`}
                avatarUrl={influencer.avatar}
                title={influencer.name}
                description={`${influencer.followers.toLocaleString()} followers`}
              />
            ))}
        </Grid>
      </Flex>
    </PageContainer>
  )
}
