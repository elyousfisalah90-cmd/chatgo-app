export interface Video {
  id: string
  url: string
  thumbnail: string
  user: {
    id: string
    username: string
    avatar: string
    verified: boolean
  }
  description: string
  music: {
    title: string
    artist: string
  }
  stats: {
    likes: number
    comments: number
    shares: number
    views: number
  }
  isLiked: boolean
  isFollowing: boolean
}
