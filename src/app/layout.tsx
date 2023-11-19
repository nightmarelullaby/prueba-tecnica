"use client";
import './globals.css';
import { QueryClientProvider ,QueryClient} from '@tanstack/react-query'
import {useState} from "react"


export default function RootLayout({children}:{children:React.ReactNode}){
    const queryClient = new QueryClient()
    return <html lang="esp">
        <body>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </body>
    </html>
}