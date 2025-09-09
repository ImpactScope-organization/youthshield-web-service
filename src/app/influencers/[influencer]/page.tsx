import { PageContainer } from '@/components/common/PageContainer'
import { serverClient } from '@/trpc/client/server-client'

export default async () => {
  const influencer = await serverClient.influencers.get({ id: '68b9722b72066ed02955cb84'})
  return <PageContainer>{influencer?.name}</PageContainer>
}
