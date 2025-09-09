import { PageContainer } from '@/components/common/PageContainer'
import { serverClient } from '@/trpc/client/server-client'
import { Flex, Grid, Heading } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'

type Props = {
  params: Promise<{ influencerId: string }>
}
export default async ({ params }: Props) => {
  const { influencerId } = await params
  const influencer = await serverClient.influencers.get({ id: influencerId })
  const misleadingPosts = await serverClient.influencerPosts.getByInfluencerId({ influencerId })

  return (
    <PageContainer>
      <Flex gap="4" direction="column">
        <Heading>{influencer?.name}</Heading>
        <Heading size="4" as="h3">
          Misleading posts
        </Heading>
        <Grid gap="4" columns="3">
          {misleadingPosts &&
            misleadingPosts.map((misleadingPost) => (
              <LinkCard
                key={misleadingPost._id}
                to={`/influencers/${influencer._id}/posts/${misleadingPost._id}`}
                avatarUrl={influencer.avatar}
                title={influencer.name}
                description={misleadingPost.text.original}
              />
            ))}
        </Grid>
      </Flex>
    </PageContainer>
  )
}
