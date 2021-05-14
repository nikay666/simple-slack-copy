import { Timestamp } from "../../firebaseTypes";

export type MessageProps = {
  message: string
  timestamp: Timestamp
  user: string
  userImage: string
}

