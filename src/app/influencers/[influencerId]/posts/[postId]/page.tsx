import { PageContainer } from '@/components/common/PageContainer'
import { Flex, Grid, Heading } from '@radix-ui/themes'
import { LinkCard } from '@/components/common/LinkCard'
import { serverClient } from '@/trpc/client/server-client'

type Props = {
  params: Promise<{ influencerId: string; postId: string }>
}
export default async ({ params }: Props) => {
  const { postId } = await params
  const misleadingPost = await serverClient.influencerPosts.getById({ id: postId })

  return (
    <PageContainer>
      <Flex gap="4" direction="column">
        <Heading>{misleadingPost.text.original}</Heading>
        <Grid gap="4" columns="3"></Grid>
      </Flex>
    </PageContainer>
  )
}
