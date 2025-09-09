import { publicProcedure } from '@/trpc/server'
import { dbConnect } from '@/db/mongoose'
import { InfluencerModel, TInfluencer } from '@/models/Influencer'
import { z } from 'zod'

export const influencers = {
  all: publicProcedure.query(async () => {
    await dbConnect()
    const influencers: TInfluencer[] = await InfluencerModel.aggregate([
      {
        $project: {
          facebookURL: 1,
          name: 1,
          followers: 1,
          avatar: 1,
          _id: { $toString: '$_id' }
        }
      }
    ])
    return influencers
  }),
  get: publicProcedure
    .input(
      z.object({
        id: z.string()
      })
    )
    .query(async (opts) => {
      await dbConnect()
      const influencer: TInfluencer | null = await InfluencerModel.findById(opts.input.id)
      return influencer
    })
}
