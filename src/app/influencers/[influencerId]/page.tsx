import { PageContainer } from '@/components/common/PageContainer'
import { serverClient } from '@/trpc/client/server-client'
import { Flex, Grid, Heading } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'
import { FileTextIcon, ImageIcon, VideoIcon } from '@radix-ui/react-icons'

type Props = {
  params: Promise<{ influencerId: string }>
}
export default async ({ params }: Props) => {
  const { influencerId } = await params
  const influencer = await serverClient.influencers.get({ id: influencerId })
  const misleadingPosts = await serverClient.influencerPosts.getByInfluencerId({ influencerId })

  if (!influencer) {
    throw new Error('no influencer found')
  }

  return (
    <PageContainer>
      <Flex gap="4" direction="column">
        <Heading>{influencer?.name}</Heading>
        <Heading size="4" as="h3">
          Misleading posts
        </Heading>
        <Grid gap="4" columns="3">
          {misleadingPosts &&
            misleadingPosts.map((misleadingPost) => {
              const icon =
                misleadingPost?.type === 'video' ? (
                  <VideoIcon />
                ) : misleadingPost?.type === 'photo' ? (
                  <ImageIcon />
                ) : (
                  <FileTextIcon />
                )
              return (
                <LinkCard
                  key={misleadingPost._id as string}
                  to={`/influencers/${influencer._id}/posts/${misleadingPost._id}`}
                  avatarUrl={influencer.avatar}
                  title={influencer.name}
                  icon={icon}
                  description={misleadingPost.text.original}
                />
              )
            })}
        </Grid>
      </Flex>
    </PageContainer>
  )
}
