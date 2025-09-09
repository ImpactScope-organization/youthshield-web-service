import mongoose, { Schema, Document, Types } from 'mongoose'

interface Text {
  original: string
  ocr: string
  transcript: string
  llm: string
}

interface Metrics {
  likes: number
  comments: number
  shares: number
}

interface Analysis {
  actualPost: string
  identifiedIssue: string
  officialRecommendation: string
  contradictionOrInconsistency: string
  linkToPost: string
  linkToReliableSource: string
  createdAt: Date
  updatedAt: Date
}

export interface InfluencerPost extends Document {
  postId: string
  influencerId: Types.ObjectId
  url: string
  postedAt: Date
  type: string
  text: Text
  metrics: Metrics
  isPrivate: boolean
  analysis: Analysis
  createdAt: Date
  updatedAt: Date
}

const TextSchema = new Schema<Text>(
  {
    original: { type: String, required: true },
    ocr: { type: String, required: true },
    transcript: { type: String, required: true },
    llm: { type: String, required: true }
  },
  { _id: false }
)

const MetricsSchema = new Schema<Metrics>(
  {
    likes: { type: Number, required: true },
    comments: { type: Number, required: true },
    shares: { type: Number, required: true }
  },
  { _id: false }
)

const AnalysisSchema = new Schema<Analysis>(
  {
    actualPost: { type: String, required: true },
    identifiedIssue: { type: String, required: true },
    officialRecommendation: { type: String, required: true },
    contradictionOrInconsistency: { type: String, required: true },
    linkToPost: { type: String, required: true },
    linkToReliableSource: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  },
  { _id: false }
)

const InfluencerPostSchema = new Schema<InfluencerPost>(
  {
    postId: { type: String, required: true },
    influencerId: { type: Schema.Types.ObjectId, ref: 'influencers', required: true },
    url: { type: String, required: true },
    postedAt: { type: Date, required: true },
    type: { type: String, required: true },
    text: { type: TextSchema, required: true },
    metrics: { type: MetricsSchema, required: true },
    isPrivate: { type: Boolean, required: true },
    analysis: { type: AnalysisSchema, required: true }
  },
  { timestamps: true }
)

export const InfluencerPostModel =
  mongoose.models.InfluencerPost ||
  mongoose.model<InfluencerPost>('influencer_posts', InfluencerPostSchema)
