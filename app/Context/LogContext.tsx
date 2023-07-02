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
}

interface IDashboardProviderProps {
    children: ReactNode;
}

export const LogContext = createContext<ILogContext | null>(null);

export const LogProvider = ({children}: IDashboardProviderProps) => {
    const [logs, setLogs] = useState<ILog[]>([]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        fetch(`/api/logs?pageIndex=${pageIndex}&pageSize=${pageSize}`)
            .then(response => response.json())
            .then(res => {
                if (Array.isArray(res.logs)) {
                    setLogs(res.logs);
                    setTotal(res.total)
                } else {
                    throw new Error('Invalid data!');
                }
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    }, []);
    
    return (
        <LogContext.Provider value={{logs}}>
            {children}
        </LogContext.Provider>
    )
}