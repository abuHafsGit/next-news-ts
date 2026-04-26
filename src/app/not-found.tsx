import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            NotFound
            <Link href={'/'}>
            <button >back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;