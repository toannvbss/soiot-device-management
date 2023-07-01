'use client';
import { createContext, useState, useEffect, ReactNode } from "react";

export interface IDevice {
    id: number;
    name: string;
    macAddress: string;
    ip: string;
    createdDate: string;
    powerConsumption: number;
}

interface IDashboardContext {
    devices: IDevice[];
    addDevice: (device: IDevice) => void;
}

interface IDashboardProviderProps {
    children: ReactNode;
}

export const DashboardContext = createContext<IDashboardContext | null>(null);

export const DashboardProvider = ({children}: IDashboardProviderProps) => {
    const [devices, setDevices] = useState<IDevice[]>([]);
    const addDevice = (device: IDevice): void => {
        setDevices(pre => [...pre, device])    
    }
  
    useEffect(() => {
        fetch('/api/devices')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.devices)) {
                    setDevices(data.devices);
                } else {
                    throw new Error('Invalid data!');
                }
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    }, []);
    

    return (
        <DashboardContext.Provider value={{devices, addDevice}}>
            {children}
        </DashboardContext.Provider>
    )
}