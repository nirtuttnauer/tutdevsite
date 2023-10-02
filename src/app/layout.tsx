'use client'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/comp/Navbar";
import Footer from "@/app/comp/Footer";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>

        </html>
    )
}
