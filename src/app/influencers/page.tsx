import { Flex, Container, Heading, Grid } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'

export default () => {
  return (
    <Container className="py-16">
      <Flex gap="4" direction="column">
        <Heading>Influencers</Heading>
        <Grid gap="4" columns="3">
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
        </Grid>
      </Flex>
    </Container>
  )
}
