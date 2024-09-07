"use client";
import { Button } from "@/components/ui/button";
import React,{ useState } from "react";
import {
  HiLightBulb,
  HiOutlineClipboardCheck,
  HiOutlineViewGrid,
} from "react-icons/hi";

const CreateCourse = () => {
  const StepperOption = [
    {
      id: 1,
      name: "Category",
      icon: <HiOutlineViewGrid />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiOutlineClipboardCheck />,
    },
  ];
  const [ActiveIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-2xl text-secondary font-medium">Create Course</h2>
        <div className="flex my-5">
          {StepperOption.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center w-[60px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white
                                    ${ActiveIndex >= index && 'bg-purple-500'}`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOption?.length - 1 && (
                <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${ActiveIndex-1>=index && 'bg-purple-500'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>


      <div className='px-10 md:px-20 lg:px-44 mt-10'>
      {/* Component            */}
      {/* Next previous button */}
      <div className='flex justify-between'>
        <Button disabled={ActiveIndex == 0 } 
        variant = 'outline'
        onClick={()=>setActiveIndex(ActiveIndex-1)} >Previous</Button>
      {ActiveIndex<2 &&<Button onClick={() => setActiveIndex(ActiveIndex + 1)} className='bg-secondary'>Next</Button>}
        {ActiveIndex ==2 &&<Button onClick={() => setActiveIndex(ActiveIndex + 1)} className='bg-secondary'>Generate Course</Button> }

      </div>
      </div>
    </div>
  );
};

export default CreateCourse;
