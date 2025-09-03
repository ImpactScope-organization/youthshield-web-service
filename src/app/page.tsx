import { serverClient } from '@/trpc-client/server-client'

export default async () => {
  const user = await serverClient.getUser()

  console.log(user)
  return <div>hello world</div>
}
