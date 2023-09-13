import React, { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { MoreVertical } from 'lucide-react';
import { AddCourseModal } from "@/components/AddCourseModal";
import { DropDownMenuActive } from "@/components/DropDownMenuActive";
import { DropdownMenuArchive } from "@/components/DropDownMenuArchive";
import { AppContext } from "@/contexts/appContext";

export const Courses: React.FC = () => {
  const appContext = useContext(AppContext);
  const courseData = appContext.appInfo.data.courseData;

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState(courseData);

  // Handle search input change
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterCourses(event.target.value);
  };

  // Filter courses based on the search query
  const filterCourses = (query: string) => {
    const filteredCourses = courseData.filter((course) =>
      course.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredCourses);
  };

  // Handle clear search button click
  const handleClearSearch = () => {
    if (searchQuery) {
      // Clear the search query and show the original array
      setSearchQuery("");
      setFilteredData(courseData);
    } else {
      // Toggle between showing the filtered and original array
      const newData = searchQuery
        ? courseData
        : courseData.filter((course) =>
            course.Name.toLowerCase().includes(searchQuery.toLowerCase())
          );
      setFilteredData(newData);
      setSearchQuery(newData ? searchQuery : "");
    }
  };
  return (
    <>
      <div className="p-2 bg-gray-200 w-[95vw] min-h-[100vh] flex items-center justify-center">
        <div className="flex flex-col items-center w-11/12 justify-center">
          <div className="flex justify-start items-start w-11/12 my-3 mx-3">
            <p className="text-2xl font-semibold">Courses</p>
          </div>
          <div className="w-11/12 flex flex-col justify-center items-center my-3">
            <div className="flex flex-row w-full justify-between my-3">
              <p className="text-md font-semibold text-gray-600">COURSE LIST</p>
              <div className="flex flex-row">
                <Button className="bg-white hover:bg-red-300" onClick={handleClearSearch}>
                  <Search className="text-gray-400" />
                </Button>
                <Input
                  type="search"
                  className="w-[200px]"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </div>
            </div>

            {/* Table Component */}
            <Table className="bg-white rounded-lg">
              <TableHeader>
                <TableRow>
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
                {filteredData.map((elem, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{elem.Name}</TableCell>
                      <TableCell>{elem.Description.slice(0, 11)}...</TableCell>
                      <TableCell>{elem.Instructor}</TableCell>
                      <TableCell>{elem.Instrument}</TableCell>
                      <TableCell>{elem.dayOfWeek}</TableCell>
                      <TableCell>{elem.noOfStudents}</TableCell>
                      <TableCell>{elem.Price}</TableCell>
                      {elem.Status === 'Active' ? (
                        <TableCell>
                          <Badge className="bg-green-300 rounded-sm">{elem.Status}</Badge>
                        </TableCell>
                      ) : null}
                      {elem.Status === 'Closed' ? (
                        <TableCell>
                          <Badge className="bg-red-300 rounded-sm">{elem.Status}</Badge>
                        </TableCell>
                      ) : null}
                      {elem.Status === 'Archived' ? (
                        <TableCell>
                          <Badge className="bg-gray-300 text-gray-700 rounded-sm">{elem.Status}</Badge>
                        </TableCell>
                      ) : null}
                      <TableCell className="text-right flex justify-center">
                        {elem.Status === 'Active' ? <DropDownMenuActive index={index} /> : null}
                        {elem.Status === 'Archived' ? <DropdownMenuArchive index={index} /> : null}
                        {elem.Status === 'Closed' ? <MoreVertical className="text-gray-300 rounded-lg" /> : null}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="flex w-11/12 m-3 flex-row justify-end items-end">
            <AddCourseModal />
          </div>
        </div>
      </div>
    </>
  );
};
