'use client'

import { ReactNode, createContext, useEffect, useState } from "react"

export interface ILog {
    id: number;
    name: string;
    action: string;
    ip: string;
    date: string;
}

interface ILogContext {
    logs: ILog[];
    totalPage: number;
    pageIndex: number;
    changePageIndex: (pageIndex: number) => void;
}

interface ILogProviderProps {
    children: ReactNode;
}

export const LogContext = createContext<ILogContext | null>(null);

export const LogProvider = ({children}: ILogProviderProps) => {
    const [logs, setLogs] = useState<ILog[]>([]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [totalPage, setTotalPage] = useState<number>(0);

    const changePageIndex = (pageIndex: number): void => {
        setPageIndex(pageIndex)
    }

    useEffect(() => {
        fetch(`/api/logs?pageIndex=${pageIndex}&pageSize=${pageSize}`)
            .then(response => response.json())
            .then(res => {
                if (Array.isArray(res.logs)) {
                    setLogs(res.logs);
                    setTotalPage(Math.ceil(res.total/pageSize));
                } else {
                    throw new Error('Invalid data!');
                }
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    }, [pageIndex, pageSize]);
    
    return (
        <LogContext.Provider value={{logs, totalPage, pageIndex, changePageIndex}}>
            {children}
        </LogContext.Provider>
    )
}