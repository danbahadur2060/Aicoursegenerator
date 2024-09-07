"use client"
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiLogout,
  HiOutlineColorSwatch,
  HiOutlineCreditCard,
  HiOutlineHome,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const SideBar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineColorSwatch />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Credite",
      icon: <HiOutlineCreditCard />,
      path: "/dashboard/credite",
    },
    {
      id: 6,
      name: "LogOut",
      icon: <HiLogout />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();
  return (
    <>
      <div className="fixed md:w-64 shadow-md p-5 h-full">
        <Image
          src="/logo.svg"
          width={160}
          height={100}
          alt="Dashboard Logo"
        ></Image>
        <hr className="my-5" />
        <ul>
          {Menu.map((items, index) => (
            <Link href={items.path}>
            <div
              key={index}
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-200 mb-2 hover:text-black rounded-lg
                ${items.path == path && 'bg-gray-200 text-black'}
                `
              }
            >
              <div className="text-2xl">{items.icon}</div>
              <h2>{items.name}</h2>
            </div>

</Link>
          ))}
        </ul>

        <div className='absolute bottom-10 w-[60%]'>
        <Progress value={33}/>
        <h3 className='text-sm my-2'>3 Out of 5 Course  created</h3>
        <h3 className='text-xs text-gray-400'>Upgrade your plan for unlimted course  generate</h3>
        </div>
      </div>
    </>
  );
};

export default SideBar;
