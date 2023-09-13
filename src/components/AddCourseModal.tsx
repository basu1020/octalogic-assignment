import React, { useContext, useState } from "react"
import { Input } from "./ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { AppContext } from "@/contexts/appContext"

export const AddCourseModal: React.FC = () => {
    const appContext = useContext(AppContext)
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [instructor, setInstructor] = useState("");
    const [instrument, setInstrument] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState("");
    const [price, setPrice] = useState("")


    const handleAddCourse = () => {
        // Check if all input fields are filled
        if (courseName && description && instructor && instrument && dayOfWeek && price) {
            console.log(courseName, description, instructor, instrument, dayOfWeek)
            // Create a new course object
            const newCourse = {
                Name: courseName,
                Description: description,
                Instructor: instructor,
                Instrument: instrument,
                dayOfWeek: dayOfWeek,
                noOfStudents: 0,
                Price: `$${price}`,
                Status: 'Active',
                Actions: "Enrol"
                // Add other properties and values as needed
            };

            const updatedCourseData = [...appContext.appInfo.data.courseData, newCourse]
            appContext.setAppInfo({
                ...appContext.appInfo,
                data: {
                  ...appContext.appInfo.data,
                  courseData: updatedCourseData,
                },
              });
              
            localStorage.setItem('appInfo', JSON.stringify(appContext.appInfo))
            // You can do something with the newCourse object here,
            // such as sending it to a server or updating your state.

            // Clear the input fields
            setCourseName("");
            setDescription("");
            setInstructor("");
            setInstrument("");
            setDayOfWeek("");
        } else {
            // Handle the case where not all input fields are filled
            alert("Please fill in all input fields before adding a course.");
        }
    };


    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-red-300 text-red-900 hover:bg-red-400"><Plus size={20} className="me-2" />Add Courses</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="m-2">
                        Add Course
                    </DialogTitle>
                    <Input
                        placeholder="Course Name"
                        className="w-full m-2"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                    <Input
                        placeholder="Description"
                        className="w-full m-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input
                        placeholder="Instructor"
                        className="w-full m-2"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)}
                    />
                    <Select onValueChange={(value) => { setInstrument(value) }} defaultValue={instrument}>
                        <SelectTrigger className="w-full m-2">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Instruments</SelectLabel>
                                <SelectItem value="Piano">Piano</SelectItem>
                                <SelectItem value="Guitar">Guitar</SelectItem>
                                <SelectItem value="Saxophone">Saxophone</SelectItem>
                                <SelectItem value="Drum set">Drum set</SelectItem>
                                <SelectItem value="Violin">Violin</SelectItem>
                                <SelectItem value="Flute">Flute</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select onValueChange={(value) => { setDayOfWeek(value) }} defaultValue={dayOfWeek}>
                        <SelectTrigger className="w-full m-2">
                            <SelectValue placeholder="Day of the week" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Day of the week</SelectLabel>
                                <SelectItem value="monday">Monday</SelectItem>
                                <SelectItem value="tuesday">Tuesday</SelectItem>
                                <SelectItem value="wednesday">Wednesday</SelectItem>
                                <SelectItem value="thursday">Thursday</SelectItem>
                                <SelectItem value="friday">Friday</SelectItem>
                                <SelectItem value="saturday">Saturday</SelectItem>
                                <SelectItem value="sunday">Sunday</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input
                        placeholder="Price"
                        className="w-full m-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div className="flex flex-row items-end justify-end mt-2">
                        <Button variant={"ghost"}>
                            Cancel
                        </Button>
                        <Button className="bg-red-400 hover:bg-red-600 text-black ms-2" onClick={handleAddCourse}>
                            Add Course
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}