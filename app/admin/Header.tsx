'use client'

import { RiAccountCircleFill } from "react-icons/ri";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (window.outerWidth <= 414) {
            setIsMobile(true);
        }
    }, [])

    const { data: session, status } = useSession({
        required: true,
    });

    if(status === "loading" && !session) {
        return <></>;
    }
    
    if (isMobile) {
        return <></>;
    }

    return (
        <div className="fixed w-full py-2 bg-white text-gray-600 flex justify-end items-center pr-6 z-10">
            <RiAccountCircleFill className="mr-2" size={25}/>
            <span className="text-base">{session && session.user ? `Welcome ${session.user.name}` : "Welcome"}</span>
        </div>
    );
}
