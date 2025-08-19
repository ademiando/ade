export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType
}

export interface FormData {
  name: string
  email: string
  message: string
}