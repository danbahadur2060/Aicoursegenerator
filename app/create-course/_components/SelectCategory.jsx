import CategoryList from '@/app/_share/CategoryList';
import Image from 'next/image';
import React from 'react';

const SelectCategory = () => {
    return (
        <div className='px-10 py-3 md:px-20'>
            <h2 className='my-3'>Select Your Category</h2>

        <div className='grid grid-cols-3 gap-10 '>
          {CategoryList.map((items,index)=>(
              <div className ='flex flex-col p-5  border items-center rounded-xl hover:border-secondary hover:bg-blue-50 cursor-pointer'>

            <Image src={items.icon} height={50} width={50} alt ="Category Icons" ></Image>
            <h2>{items.name}</h2>
            </div>
          ))}
            
        </div>
          </div>
    );
}

export default SelectCategory;
