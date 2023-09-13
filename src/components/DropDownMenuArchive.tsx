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

interface DropDownMenuArchivedProps {
    index: number;
}

export const DropdownMenuArchive: React.FC<DropDownMenuArchivedProps> = ({ index }) => {
    const appContext = useContext(AppContext)

    const onClickUnArchive = () => {
        const updatedCourseData = [...appContext.appInfo.data.courseData]; // Create a copy of courseData
        updatedCourseData[index].Status = "Active"; // Update the Status of the specific course

        appContext.setAppInfo({
            ...appContext.appInfo,
            data: {
                ...appContext.appInfo.data,
                courseData: updatedCourseData,
            },
        });

        localStorage.setItem('appInfo', JSON.stringify(appContext.appInfo))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreVertical className="text-gray-400 rounded-lg hover:text-gray-700 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onClickUnArchive}>Unarchive Course</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}