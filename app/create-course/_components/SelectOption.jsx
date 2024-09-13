import React,{useContext} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

const SelectOption = () => {
  const {UserCourseInput, setUserCourseInput}=useContext(UserInputContext);

  const  handleInputChange = (fieldName , value)=>{
    setUserCourseInput(prev =>({
        ...prev,
        [fieldName]:value
    }))
  }
  return (
    <div className="px-6 py-6 md:px-20 lg:px-12 ">
      <div className="grid grid-cols-2 gap-10">
        <div>
            <label > <span>🤔 </span>Difficulty Level</label>
          <Select onValueChange={(value)=>handleInputChange('level',value)}
            
            defaultValue={UserCourseInput?.level}
            >
            <SelectTrigger className="">
              <SelectValue placeholder="----Select----" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="More Then 3 Hours">More Then 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
            <label ><span>⏱️ </span>Course  Duration</label>
          <Select onValueChange={(value)=>handleInputChange('duration',value)}
            defaultValue={UserCourseInput?.duration}
            >
            <SelectTrigger className="">
              <SelectValue placeholder="----Select----" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hours">1 Hours</SelectItem>
              <SelectItem value="2 Hours ">2 Hours </SelectItem>
              <SelectItem value="Advance">More Then 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
            <label ><span>🎬 </span>Add Video</label>
          <Select onValueChange={(value)=>handleInputChange('addvideo',value)}
            defaultValue={UserCourseInput?.addvideo}
            >
            <SelectTrigger className="">
              <SelectValue placeholder="----Select----" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="No ">No </SelectItem>

            </SelectContent>
          </Select>
        </div>
        <div>
            <label><span>☑ </span>No Of Chapters</label>
          <Input onChange={(e)=>handleInputChange('noofchaptor',e.target.value)} defaultValue={UserCourseInput?.noofchaptor} type = {'number'} id='numberofch' />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
