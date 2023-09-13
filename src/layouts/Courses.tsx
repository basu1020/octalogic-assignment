import React, { useContext } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { MoreVertical } from 'lucide-react';
import { AddCourseModal } from "@/components/AddCourseModal"
import { DropDownMenuActive } from "@/components/DropDownMenuActive"
import { DropdownMenuArchive } from "@/components/DropDownMenuArchive"
import { AppContext } from "@/contexts/appContext"

export const Courses: React.FC = () => {
  const appContext = useContext(AppContext)
  const courseData = appContext.appInfo.data.courseData

  return (
    <>
      <div className="p-2 bg-gray-200 w-[95vw] min-h-[100vh] flex items-center justify-center">
        <div className="flex flex-col items-center w-11/12 justify-center">
          <div className="flex justify-start items-start w-11/12 my-3 mx-3">
            <p className="text-2xl font-semibold">
              Courses
            </p>
          </div>
          <div className="w-11/12 flex flex-col justify-center items-center my-3">
            <div className="flex flex-row w-full justify-between my-3">
              <p className="text-md font-semibold text-gray-600">
                COURSE LIST
              </p>
              <div className="flex flex-row">
                <Button className="bg-white hover:bg-red-300"> <Search className="text-gray-400 " /> </Button>
                <Input type="search" className="w-[200px]" placeholder="Search" />
              </div>
            </div>

            {/* Table Component */}

            <Table className="bg-white rounded-lg">
              <TableHeader>
                <TableRow >
                  <TableHead className="w-[9vw]">Name</TableHead>
                  <TableHead className="w-[9vw]">Description</TableHead>
                  <TableHead className="w-[9vw]">Instructor</TableHead>
                  <TableHead className="w-[9vw]">Instrument</TableHead>
                  <TableHead className="w-[9vw]">Day of week</TableHead>
                  <TableHead className="w-[9vw]"># of students</TableHead>
                  <TableHead className="w-[9vw]">Price </TableHead>
                  <TableHead className="w-[9vw]"> Status </TableHead>
                  <TableHead className="text-right">Actions </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courseData.map((elem, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {elem.Name}
                      </TableCell>
                      <TableCell>{elem.Description.slice(0, 11)}...</TableCell>
                      <TableCell>{elem.Instructor} </TableCell>
                      <TableCell >{elem.Instrument}</TableCell>
                      <TableCell>{elem.dayOfWeek}</TableCell>
                      <TableCell>{elem.noOfStudents}</TableCell>
                      <TableCell>{elem.Price}</TableCell>
                      {elem.Status === 'Active' ? <TableCell>
                        <Badge className="bg-green-300 rounded-sm">{elem.Status}
                        </Badge>
                      </TableCell> : ""}
                      {elem.Status === 'Closed' ? <TableCell>
                        <Badge className="bg-red-300 rounded-sm">
                          {elem.Status}
                        </Badge>
                      </TableCell> : ""}
                      {elem.Status === 'Archived' ? <TableCell>
                        <Badge className="bg-gray-300 text-gray-700 rounded-sm">{elem.Status}
                        </Badge>
                      </TableCell> : ""}
                      <TableCell className="text-right flex justify-center">{elem.Status === 'Active' ? <DropDownMenuActive index={index}/> : ""}
                      {elem.Status === 'Archived' ? <DropdownMenuArchive index={index}/> : ""}
                      {elem.Status === 'Closed' ? <MoreVertical className="text-gray-300 rounded-lg" /> : ""}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
          <div className="flex w-11/12 m-3 flex-row justify-end items-end">
            <AddCourseModal/>
          </div>
        </div>
      </div>
    </>
  )
}
