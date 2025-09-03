import { serverClient } from '@/trpc/client/server-client'

export default async () => {
  const user = await serverClient.getUser()

  return <div>hello {user[0].name}</div>
}
