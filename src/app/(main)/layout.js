import React from "react";
import Header from '@/components/shared/Header'
import Navbar from '@/components/shared/Navbar'


export default function Mainlayout({ children }
) {
    return (
        <div>
            <Header></Header>
            <Navbar />
            {children}
        </div>
    );
}
