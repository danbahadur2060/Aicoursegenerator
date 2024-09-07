import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 flex justify-between shadow-sm">
      <Image
        src="/logo.svg"
        alt="APP logo here.."
        height={160}
        width={160}
      ></Image>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
