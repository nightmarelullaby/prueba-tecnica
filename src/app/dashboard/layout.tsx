import { ReactNode } from "react";

export default function dashboardRootLayout({children}:{children:ReactNode}){
    return <main className="bg-gray-50">
        {children}
    </main>
}