import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SelectOption = () => {
  return (
    <div className="px-6 py-6 md:px-20 lg:px-12 ">
      <div className="grid grid-cols-2 gap-10">
        <div>
            <label For="selectd"> <span>🤔 </span>Difficulty Level</label>
          <Select id='selectd'>
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
            <label For="selectc"><span>⏱️ </span>Course  Duration</label>
          <Select id='selectc'>
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
            <label htmlFor="selectvideo"><span>🎬 </span>Add Video</label>
          <Select id='selectvideo'>
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
            <label htmlFor="numberofch"><span>☑ </span>No Of Chapters</label>
          <Input type = {'number'} id='numberofch' />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
