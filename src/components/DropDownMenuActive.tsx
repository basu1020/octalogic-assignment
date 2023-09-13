import React, { useContext } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from 'lucide-react';
import { AppContext } from "@/contexts/appContext";

interface DropDownMenuActiveProps {
  index: number;
}

export const DropDownMenuActive: React.FC<DropDownMenuActiveProps> = ({ index }) => {
  const appContext = useContext(AppContext)

  const onClickCLose = () => {
    const updatedCourseData = [...appContext.appInfo.data.courseData]; // Create a copy of courseData
    updatedCourseData[index].Status = "Closed"; // Update the Status of the specific course

    // Update the appContext's appInfo with the updated courseData
    appContext.setAppInfo({
      ...appContext.appInfo,
      data: {
        ...appContext.appInfo.data,
        courseData: updatedCourseData,
      },
    });
  }

  const onClickArchive = () => {
    const updatedCourseData = [...appContext.appInfo.data.courseData]; // Create a copy of courseData
    updatedCourseData[index].Status = "Archived"; // Update the Status of the specific course

    // Update the appContext's appInfo with the updated courseData
    appContext.setAppInfo({
      ...appContext.appInfo,
      data: {
        ...appContext.appInfo.data,
        courseData: updatedCourseData,
      },
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical className="text-gray-400 rounded-lg hover:text-gray-700 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem >Edit Course</DropdownMenuItem>
        <DropdownMenuItem onClick={onClickCLose}>Close Course</DropdownMenuItem>
        <DropdownMenuItem onClick={onClickArchive}>Archive Course</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}