"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const AddCourse = () => {
    const {user} = useUser();
    return (
        <div className='flex justify-between'>

            <div>
                <h2>Hello,
                    <span className='font-bold'>{user?.fullName}</span>
                    <p className='text-sm text-gray-500'>Create new coures With AI,Share with Friends and </p>
                </h2>
            </div>
            <Link href='/create-course' >
    <Button>+ Create AI course</Button>
            </Link>
        
        </div>
    );
}

export default AddCourse;
