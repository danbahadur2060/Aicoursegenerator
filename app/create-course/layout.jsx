"use client"
import React,{useState} from "react";
import Header from "../_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

const CreateCourseLayout = ({ children }) => {
    const [UserCourseInput, setUserCourseInput] = useState([]);
  return (
    <div>
      <UserInputContext.Provider>
        <>
          <Header />
          {children}
        </>
      </UserInputContext.Provider>
    </div>
  );
};

export default CreateCourseLayout;
