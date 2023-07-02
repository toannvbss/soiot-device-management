'use client';
import { useContext } from 'react';
import { LogContext } from '@/app/Context/LogContext';

export default function Pagination() {
    const logContext = useContext(LogContext);
    const handlePageChange = (pageIndex: number) => {
        if (!logContext) return;
        if (pageIndex < 1) pageIndex = 1;
        if (pageIndex > logContext.totalPage) pageIndex = logContext.totalPage;
        logContext.changePageIndex(pageIndex);
    };

    if (logContext) {
        return (
            <div className="space-x-2 flex justify-center">
                <div
                    className="w-10 h-10 flex justify-center items-center border border-blue-300 rounded-full cursor-pointer
                    hover:bg-blue-500 text-blue-500 hover:text-white"
                    onClick={() => handlePageChange(logContext.pageIndex - 1)}
                >
                    &lt;
                </div>
                {Array.from(Array(logContext.totalPage).keys()).map((e) => {
                    const isActive = e === logContext.pageIndex - 1;
                    return (
                    <div
                        key={`p-${e}`}
                        className={`w-10 h-10 flex justify-center items-center border rounded-full cursor-pointer
                        ${isActive ? "border-blue-600 bg-blue-600 text-white" : "border-blue-300 hover:bg-blue-500 text-blue-500 hover:text-white"}`}
                        onClick={() => handlePageChange(e + 1)}
                    >
                        {e + 1}
                    </div>
                    );
                })}
                <a
                    className="w-10 h-10 flex justify-center items-center border border-blue-300 rounded-full cursor-pointer
                    hover:bg-blue-500 text-blue-500 hover:text-white"
                    onClick={() => handlePageChange(logContext.pageIndex + 1)}
                >
                    &gt;
                </a>
            </div>
        );
    }
}
