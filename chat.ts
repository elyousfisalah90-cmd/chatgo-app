export interface Contact {
  id: string
  name: string
  online: boolean
  color: string
}

export interface Message {
  id: string
  sender: "me" | "other"
  text: string
  timestamp: string
  read: boolean
}

export interface Conversation {
  id: string
  contact: Contact
  lastMessage: string
  lastTime: string
  unread: number
}
