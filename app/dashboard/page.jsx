import { UserButton } from '@clerk/nextjs';
import React from 'react';
import AddCourse from './_components/AddCourse';

const Dashboard = () => {
    return (
        <div>
           {/* <UserButton /> */}
           <AddCourse />
        </div>
    );
}

export default Dashboard;
