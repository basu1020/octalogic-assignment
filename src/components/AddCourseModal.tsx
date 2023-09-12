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

export const AddCourseModal: React.FC = () => {

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
                    <Input placeholder="Course Name" className="w-full m-2" />
                    <Input placeholder="Description" className="w-full m-2" />
                    <Input placeholder="Instructor" className="w-full m-2" />
                    <Input placeholder="Course Name" className="w-full m-2" />
                    <Select>
                        <SelectTrigger className="w-full m-2">
                            <SelectValue placeholder="Select an Instrument" />
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
                    <Select >
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
                    <div className="flex flex-row items-end justify-end mt-2">
                        <Button variant={"ghost"}>
                            Cancel
                        </Button>
                        <Button className="bg-red-400 hover:bg-red-600 text-black ms-2">
                            Add Course
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}