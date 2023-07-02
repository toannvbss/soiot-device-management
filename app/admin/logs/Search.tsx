'use client';
import { LogContext } from "@/app/Context/LogContext";
import React, { useContext, useState } from "react";
import { BsXLg } from "react-icons/bs";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const logContext = useContext(LogContext);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (logContext){
            logContext.changeSearchTerm(searchTerm);
        }
    }

    const handleResetSearch = () => {
        setSearchTerm('')
        if (logContext){
            logContext.changeSearchTerm('');
        }
    }

    return (
        <div className="flex items-center justify-end">
            <form 
                className="flex"
                onSubmit={handleSearch}
            >
                <div className="relative">
                    <input
                        type="text"
                        className="block w-full pl-4 pr-8 py-2 text-gray-150 bg-white border rounded-md focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                    <BsXLg 
                        className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2"
                        onClick={handleResetSearch}
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 ml-2 text-white bg-orange-350 border-l rounded "
                >
                    Search
                </button>
            </form>
        </div>
    );
}