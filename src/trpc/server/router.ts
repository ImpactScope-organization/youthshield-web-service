import { router, publicProcedure } from './index'
import { z } from 'zod'
import { TUser, UserModel } from '@/models/User'
import { dbConnect } from '@/db/mongoose'
import { influencers } from '@/trpc/server/queries/influencers'
import { influencerPosts } from '@/trpc/server/queries/influencerPosts'

export const appRouter = router({
  createUser: publicProcedure
    .input((v) => {
      const schema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.string()
      })
      const result = schema.safeParse(v)
      if (!result.success) {
        throw result.error
      }
      return result.data
    })
    .mutation(async (params) => {
      await dbConnect()
      const user: TUser = await UserModel.create({
        ...params.input
      })

      return {
        user
      }
    }),

  getUser: publicProcedure.query(async () => {
    await dbConnect()
    const users: TUser[] = await UserModel.aggregate([
      {
        $project: {
          name: 1,
          email: 1,
          _id: {
            $toString: '$_id'
          }
        }
      }
    ])
    return users
  }),

  influencers,
  influencerPosts
})

export type AppRouter = typeof appRouter
