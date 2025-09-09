import { PageContainer } from '@/components/common/PageContainer'
import { Flex, Heading } from '@radix-ui/themes'
import { serverClient } from '@/trpc/client/server-client'
import { PostRow } from '@/app/influencers/[influencerId]/posts/[postId]/_components/PostRow'

type Props = {
  params: Promise<{ influencerId: string; postId: string }>
}
export default async ({ params }: Props) => {
  const { postId } = await params
  const misleadingPost = await serverClient.influencerPosts.getById({ id: postId })

  return (
    <PageContainer>
      <Flex gap="4" direction="column">
        <Heading>Original Post</Heading>
        <p>{misleadingPost?.text.original}</p>

        <hr />

        <Flex gap="4" direction="column">
          <Heading>Text content</Heading>
          <Flex gap="4" direction="column">
            <PostRow title="Image Text (OCR)" content={misleadingPost?.text.ocr} />
            <PostRow title="Video Text (Transcript)" content={misleadingPost?.text.transcript} />
          </Flex>
        </Flex>

        <hr />

        <Flex gap="4" direction="column">
          <Heading>Analysis</Heading>
          <Flex gap="4" direction="column">
            <PostRow title="Identified Issue" content={misleadingPost?.analysis.identifiedIssue} />

            <PostRow
              title="Official Recommendation"
              content={misleadingPost?.analysis.officialRecommendation}
            />
            <PostRow
              title="Contradiction or Inconsistency"
              content={misleadingPost?.analysis.contradictionOrInconsistency}
            />

            <Flex gap="4">
              <a
                href={misleadingPost?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Original Post
              </a>
              <a
                href={misleadingPost?.analysis.linkToReliableSource}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Reliable Source
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </PageContainer>
  )
}
