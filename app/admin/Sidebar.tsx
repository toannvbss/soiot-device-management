'use client';

import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { TbDevicesStar } from "react-icons/tb";
import { MdDevicesOther } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { useSession } from "next-auth/react";

export function Sidebar() {
    const pathname = usePathname();
    
    const { data: session, status } = useSession({
        required: true,
    });

    if(status === "loading" && !session) {
        return <></>
    }

    return (
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
}
