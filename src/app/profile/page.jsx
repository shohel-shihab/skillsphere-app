"use client"
import { UpdateUserProle } from "@/components/UpdateUserProle";
import { authClient } from "@/lib/auth-client"
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";
const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    // if(!user) {
    //     redirect("/login")
    // }
    return (
        <Card className="max-w-90 mx-auto flex felx-col justify-center items-center border-blue-500 p-4 my-20">
            <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
            </Avatar>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-xl font-semibold">{user?.email}</p>

            <UpdateUserProle></UpdateUserProle>
        </Card>
    )
}

export default ProfilePage