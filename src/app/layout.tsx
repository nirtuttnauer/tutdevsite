'use client'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/comp/Navbar";
import Footer from "@/app/comp/Footer";
import {Toaster, toast} from 'sonner'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Toaster/>
        <Navbar/>
        {/*<button onClick={() => toast('My first toast')}>*/}
        {children}
        <Footer/>
        </body>

        </html>
)
}
