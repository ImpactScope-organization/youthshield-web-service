import { Flex, Heading, Grid } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'
import { PageContainer } from '@/components/common/PageContainer'

export default () => {
  const influencers = [{ id: 3 }, { id: 4 }, { id: 33 }, { id: 5 }]

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
