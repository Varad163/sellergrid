export interface Review {
  id: number
  product: string
  rating: number
  text: string
  sentiment: "Positive" | "Negative" | "Neutral"
}