import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50">
        <Sidebar />
        <div className="">
          <Header />
          <div className="">
              {children}
          </div>
        </div>
    </div>
  )
}
