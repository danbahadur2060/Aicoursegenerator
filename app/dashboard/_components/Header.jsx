import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between p-4 shadow-sm">
            <Image src='/favicon.svg' width={50} height={50} alt="small logo"></Image>
            <UserButton />
        </div>
    );
}

export default Header;
