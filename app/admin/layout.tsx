'use client'

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50">
      <SessionProvider>
        <Sidebar />
        <div className="">
          <Header />
          <div className="">
              {children}
          </div>
        </div>
      </SessionProvider>
    </div>
  )
}
