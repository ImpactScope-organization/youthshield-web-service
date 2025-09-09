import { PageContainer } from '@/components/common/PageContainer'
import { serverClient } from '@/trpc/client/server-client'

type Props = {
  params: { id: string }
}
export default async ({ params: { id } }: Props) => {
  const influencer = await serverClient.influencers.get({ id })
  return <PageContainer>{influencer?.name}</PageContainer>
}
