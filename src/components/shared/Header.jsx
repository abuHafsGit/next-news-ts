import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className=' text-center py-8'>
            <Image src={logo} alt={'logo'} width={300} height={200} className=' mx-auto space-y-4' />
            <p>Lorem ipsum dolor sit.</p>
            <p>{format(new Date(), "EEE-MMM dd-yyyy")}</p>
        </div>
    );
};

export default Header;