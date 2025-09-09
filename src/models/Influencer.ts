import mongoose from 'mongoose'

export interface Influencer {
  facebookURL: string
  name: string
  followers: number
  avatar: string
}

export interface MongoInfluencer extends Influencer, mongoose.Document {}

export type TInfluencer = Influencer & {
  _id: string
  createdAt?: string
  updatedAt?: string
}

const InfluencerSchema = new mongoose.Schema<Influencer>({
  facebookURL: { type: String, required: true },
  name: { type: String, required: true },
  followers: { type: Number, required: true },
  avatar: { type: String, required: true }
})

export const InfluencerModel =
  mongoose.models.Influencer || mongoose.model<Influencer>('Influencer', InfluencerSchema)
