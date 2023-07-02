'use client';
import React from "react";

export default function Search() {
    return (
        <div className="flex items-center justify-end">
            <div className="flex">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-gray-150 bg-white border rounded-md focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 ml-2 text-white bg-orange-350 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    );
}