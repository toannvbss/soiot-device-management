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

    useEffect(() => {
        fetch('/api/logs')
            .then(response => response.json())
            .then(res => {
                if (Array.isArray(res.logs)) {
                    setLogs(res.logs);
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