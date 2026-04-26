import React from "react";
import Navbar from '@/components/shared/Navbar'
import { Montserrat } from "next/font/google";
export const montserrat = Montserrat({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ['100', '200', '400', '500']
});

export default function Mainlayout({ children }) {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            {children}
        </div>
    );
}
