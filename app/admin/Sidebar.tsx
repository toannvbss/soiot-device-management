import React from "react";
import Link from "next/link";
import { TbDevicesStar } from "react-icons/tb";
import { MdDevicesOther } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
export function Sidebar() {
    return (
        <div className="fixed h-full w-60 bg-white text-gray-450 border border-r-2 z-50">
            <div className="p-6">
                <p className="w-full mb-10 text-base font-bold">
                    <TbDevicesStar className="inline-block mr-2" size={30}/>
                    Device Manager
                </p>
                <ul className="mt-6">
                    <li className="mb-3">
                        <Link href="/admin/dashboard">
                            <MdDevicesOther className="inline-block mr-2" size={20}/>Dashboard
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href="/admin/dashboard">
                            <RxCountdownTimer className="inline-block mr-2" size={20}/>Logs
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href="/admin/dashboard">
                            <AiOutlineSetting className="inline-block mr-2" size={20}/>Setting
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
