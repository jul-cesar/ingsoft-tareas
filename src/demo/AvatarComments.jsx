import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


export function AvatarCom({ src, author }) {

    return (
        <Avatar>
            <AvatarImage src={src} alt="userprofile" />
            <AvatarFallback>{author.nombre?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
}
