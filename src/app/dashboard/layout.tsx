import { ReactNode } from "react";

export default function dashboardRootLayout({children}:{children:ReactNode}){
    return <div className="bg-gray-50 h-full">
        {children}
    </div>
}