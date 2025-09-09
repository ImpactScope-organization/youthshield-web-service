import { publicProcedure } from '@/trpc/server'
import { dbConnect } from '@/db/mongoose'
import { InfluencerPost, InfluencerPostModel } from '@/models/InfluencerPost'
import { z } from 'zod'

export const influencerPosts = {
  getByInfluencerId: publicProcedure
    .input(
      z.object({
        influencerId: z.string()
      })
    )
    .query(async (opts) => {
      await dbConnect()
      const influencerPosts: InfluencerPost[] = await InfluencerPostModel.find({
        influencerId: opts.input.influencerId
      }).select('_id')

      return influencerPosts
    })
}
