import type { Metadata } from 'next'
import '@/styles/globals.css'
import SmoothScrolling from '@/components/layout/SmoothScrolling'
import AIAssistant from '@/components/layout/AIAssistant'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
    title: 'Aethelgard Premium Collections',
    description: 'Bespoke luxury travel for the modern explorer.',
    icons: {
        icon: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=64&h=64&auto=format&fit=crop',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* Import Outfit font */}
            </head>
            <body>
                <SmoothScrolling>
                    <Navbar />
                    {children}
                    <AIAssistant />
                </SmoothScrolling>
            </body>
        </html>
    )
}
