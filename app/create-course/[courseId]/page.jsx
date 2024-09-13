"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React,{ useEffect,useState } from 'react';

const CourseLayout = ({params}) => {
    const [Course, setCourse] = useState();
    const{user} = useUser();
useEffect(()=>{
    params && GetCourse();
},[params],user)
const GetCourse = async()=>{
    const result = await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
    setCourse(result[0]);
    console.log(result);
}






    return (
        <div clasName="mt-10 px-7 md:px-20 lg:px-44">
            <h2  clasName="font-bold text-center text-2xl">Course Layout</h2>
        </div>
    );
}

export default CourseLayout;
