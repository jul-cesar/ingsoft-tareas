import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarDemo({src}) {
    return (
      <Avatar>
        <AvatarImage src={src} alt="userprofile" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  