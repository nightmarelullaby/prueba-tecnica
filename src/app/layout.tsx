"use client";
import './globals.css';
import { QueryClientProvider ,QueryClient} from '@tanstack/react-query'
const queryClient = new QueryClient()
export default function RootLayout({children}:{children:React.ReactNode}){

    return <html lang="esp">
        <body>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </body>
    </html>
}