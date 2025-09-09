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
        <Heading>Original Post</Heading>
        <p>{misleadingPost?.text.original}</p>
        {misleadingPost?.text.ocr && (
          <>
            <Heading size="3">Image Text (OCR)</Heading>
            <p>{misleadingPost.text.ocr}</p>
          </>
        )}
        <Flex gap="4" direction="column">
          <Heading>Analysis</Heading>
          <Flex gap="4" direction="column">
            <div>
              <strong>Identified Issue:</strong>
              <p>{misleadingPost?.analysis.identifiedIssue}</p>
            </div>
            <div>
              <strong>Official Recommendation:</strong>
              <p>{misleadingPost?.analysis.officialRecommendation}</p>
            </div>
            <div>
              <strong>Contradiction or Inconsistency:</strong>
              <p>{misleadingPost?.analysis.contradictionOrInconsistency}</p>
            </div>
            <div>
              <a
                href={misleadingPost?.analysis.linkToReliableSource}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Source
              </a>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </PageContainer>
  )
}
