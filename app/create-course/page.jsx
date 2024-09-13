"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useContext, useEffect } from "react";
import {
  HiLightBulb,
  HiOutlineClipboardCheck,
  HiOutlineViewGrid,
} from "react-icons/hi";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCoursLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import uuid4 from "uuid4";
import { db } from "@/configs/db";
import { useUser } from "@clerk/nextjs";
import { CourseList } from "@/configs/schema";
import { useRouter } from "next/navigation";

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

  const { UserCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(UserCourseInput);
  }, [UserCourseInput]);

  const [ActiveIndex, setActiveIndex] = useState(0);

  const checkStatus = () => {
    if (UserCourseInput?.length == 0) {
      return true;
    }
    if (
      ActiveIndex == 0 &&
      (UserCourseInput?.category?.length == 0 ||
        UserCourseInput?.category == undefined)
    ) {
      return true;
    }
    if (
      ActiveIndex == 1 &&
      (UserCourseInput?.topic?.length == 0 ||
        UserCourseInput?.topic == undefined)
    ) {
      return true;
    } else if (
      ActiveIndex == 2 &&
      (UserCourseInput?.level == undefined ||
        UserCourseInput?.duration == undefined ||
        UserCourseInput?.addvideo == undefined ||
        UserCourseInput?.noofchaptor == undefined)
    ) {
      return true;
    }
    return false;
  };
  const { user } = useUser();
  const router = useRouter()

  const GenerateCourseLayout = async () => {
    setLoading(true);
    const BASIC_PROMPT =
      "Generate a Course Tutorial on following details with field as course Name Description ,along with chapter Name about ,duration ";
    const USER_INPUT_PROMPT =
      "Category" +
      UserCourseInput?.category +
      "Topic" +
      UserCourseInput?.topic +
      "Level" +
      UserCourseInput?.level +
      "Duration" +
      UserCourseInput?.duration +
      "Noof chapter" +
      UserCourseInput?.addvideo +
      ",in JSON format";
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;

    console.log(FINAL_PROMPT);

    const result = await GenerateCoursLayout_AI.sendMessage(FINAL_PROMPT);

    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    setLoading(false);
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    var id = uuid4();

    setLoading(true);
    const result = await db.insert(CourseList).values({
      courseId: id,
      name: UserCourseInput?.topic,
      level: UserCourseInput?.level,
      category: UserCourseInput?.category,
      courseOutput: courseLayout,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage: user?.imageUrl,
    });

    console.log("created finished");
    router.replace('/create-course/'+id)
    setLoading(false);
  };

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
                                    ${ActiveIndex >= index && "bg-purple-500"}`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOption?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${
                    ActiveIndex - 1 >= index && "bg-purple-500"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* Component            */}
        {ActiveIndex == 0 ? <SelectCategory /> : null}
        {ActiveIndex == 1 ? <TopicDescription /> : null}
        {ActiveIndex == 2 ? <SelectOption /> : null}
        {/* Next previous button */}
        <div className="flex justify-between">
          <Button
            disabled={ActiveIndex == 0}
            variant="outline"
            onClick={() => setActiveIndex(ActiveIndex - 1)}
          >
            Previous
          </Button>
          {ActiveIndex < 2 && (
            <Button
              onClick={() => setActiveIndex(ActiveIndex + 1)}
              disabled={checkStatus()}
              className="bg-secondary"
            >
              Next
            </Button>
          )}
          {ActiveIndex == 2 && (
            <Button
              onClick={() => GenerateCourseLayout()}
              disabled={checkStatus()}
              className="bg-secondary"
            >
              Generate Course
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={Loading} />
    </div>
  );
};

export default CreateCourse;
