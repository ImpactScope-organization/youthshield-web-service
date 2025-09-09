import { publicProcedure } from '@/trpc/server'
import { dbConnect } from '@/db/mongoose'
import { InfluencerModel, TInfluencer } from '@/models/Influencer'

export const influencers = {
  getInfluencers: publicProcedure.query(async () => {
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
  })
}
