import React from "react";
import Header from '@/components/shared/Header'
import Navbar from '@/components/shared/Navbar'
import BrakingNews from "../../components/shared/BrakingNews";


export default function Mainlayout({ children }
) {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar />
            {children}
        </div>
    );
}
