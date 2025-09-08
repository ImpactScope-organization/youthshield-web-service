import { Flex, Heading, Grid } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'
import { PageContainer } from '@/components/common/PageContainer'
import { appRouter } from '@/trpc/server/router'

export default async () => {
  const influencersd = await appRouter.getInfluencers()

  console.log(influencersd)

  const influencers = []

  return (
    <PageContainer>
      <Flex gap="4" direction="column">
        <Heading>Influencers</Heading>
        <Grid gap="4" columns="3">
          {influencers &&
            influencers.map((influencer) => (
              <LinkCard key={influencer.id} influencer={influencer} />
            ))}
        </Grid>
      </Flex>
    </PageContainer>
  )
}
