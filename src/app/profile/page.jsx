"use client";

import { UpdateUserProfile } from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {
    const [mounted, setMounted] = useState(false);

    const userData = authClient.useSession();
    const user = userData.data?.user;

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-100 px-4">

            <Card className="w-full max-w-md rounded-2xl shadow-xl p-8 text-center bg-white/90 backdrop-blur">

                {/* Avatar */}
                <div className="flex justify-center mb-5">
                    <Avatar>
                        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    </Avatar>
                </div>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                    {user?.name || "User Name"}
                </h2>

                {/* Email */}
                <p className="text-gray-500 mt-1 text-sm">
                    {user?.email}
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Update Profile Button */}
                <div className="flex justify-center">
                    <UpdateUserProfile />
                </div>

            </Card>
        </div>
    );
};

export default ProfilePage;