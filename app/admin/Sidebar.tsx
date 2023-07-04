'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { TbDevicesStar } from "react-icons/tb";
import { MdDevicesOther } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { useSession } from "next-auth/react";

export function Sidebar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    
    useEffect(() => {
        if (window.outerWidth <= 414) {
            setIsMobile(true);
        }
    }, [])

    const { data: session, status } = useSession({
        required: true,
    });

    if(status === "loading" && !session) {
        return <></>
    }


    const desktopContent = (
        <div className="fixed h-full w-60 bg-white text-gray-450 border border-r-2 z-50">
            <div className="p-6">
                <p className="w-full mb-10 text-base font-bold">
                    <TbDevicesStar className="inline-block mr-2" size={30}/>
                    Device Manager
                </p>
                <ul className="mt-6">
                    <li className={pathname === "/admin/dashboard" ? "mb-3 text-sky-600 font-bold" : "mb-3"}>
                        <Link href="/admin/dashboard">
                            <MdDevicesOther className="inline-block mr-2" size={20}/>Dashboard
                        </Link>
                    </li>
                    <li className={pathname === "/admin/logs" ? "mb-3 text-sky-600 font-bold" : "mb-3"}>
                        <Link href="/admin/logs">
                            <RxCountdownTimer className="inline-block mr-2" size={20}/>Logs
                        </Link>
                    </li>
                    <li className={pathname === "#" ? "mb-3 text-sky-600" : "mb-3"}>
                        <Link href="#">
                            <AiOutlineSetting className="inline-block mr-2" size={20}/>Setting
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );

    const mobileContent = (
        <>
            <BiMenu
                onClick={() => setShowSidebar(!showSidebar)}
                className={`absolute top-0 m-3 inline-block ${showSidebar ? 'hidden' : ''}`} size={30}
            />
            <div 
                className={`flex top-0 fixed w-full h-full text-gray-450 z-50
                            transform transition ${showSidebar ? 'translate-x-0' : '-translate-x-full'} 
                            ease-in-out duration-700`}
                >
                <div 
                    className="p-6 border border-r-2 bg-white flex-shrink-0"
                >
                    <div>
                        <RiAccountCircleFill className="w-full mr-2" size={25}/>
                        <span className="text-base">{session && session.user ? `Welcome ${session.user.name}` : "Welcome"}</span>
                    </div>
                    <div>
                        <ul className="mt-6">
                            <li className={pathname === "/admin/dashboard" ? "mb-3 text-sky-600 font-bold" : "mb-3"}>
                                <Link
                                    onClick={() => setShowSidebar(false)} 
                                    href="/admin/dashboard"
                                >
                                    <MdDevicesOther className="inline-block mr-2" size={20}/>Dashboard
                                </Link>
                            </li>
                            <li className={pathname === "/admin/logs" ? "mb-3 text-sky-600 font-bold" : "mb-3"}>
                                <Link 
                                    onClick={() => setShowSidebar(false)}
                                    href="/admin/logs"
                                >
                                    <RxCountdownTimer className="inline-block mr-2" size={20}/>Logs
                                </Link>
                            </li>
                            <li className={pathname === "#" ? "mb-3 text-sky-600" : "mb-3"}>
                                <Link 
                                    onClick={() => setShowSidebar(false)}
                                    href="#"
                                >
                                    <AiOutlineSetting className="inline-block mr-2" size={20}/>Setting
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    onClick={() => setShowSidebar(false)}
                    className="flex-grow"
                    >
                </div>
            </div>
        </>
    )
    

    return isMobile ? mobileContent : desktopContent;
}
