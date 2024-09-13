import React from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image';
  

const LoadingDialog = ({loading}) => {
    return (
        <div className="bg-yellow-50">
            <AlertDialog open ={loading}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogDescription>
    
<div className = "flex flex-col items-center py-10">
    <Image src={'/loader.gif'} height ={100} width={100} alt ={"Loader Iamge"} />
    <h2 className="text-white">Please wait... AI Working On your Course</h2>
</div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </div>
    );
}

export default LoadingDialog;
