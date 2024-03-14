import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Auth } from "@/context/authContext"
import { useContext } from "react"

export function AvatarDemo({ src }) {
  const { currentUser } = useContext(Auth)
  return (
    <Avatar>
      <AvatarImage src={src} alt="userprofile" />
      <AvatarFallback>{currentUser?.displayName?.charAt(0).toUpperCase() || currentUser?.email?.split("@")[0].charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}
