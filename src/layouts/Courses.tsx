import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const Courses: React.FC = () => {
    const courseData = [
        {
          Name: 'Piano',
          Description: 'Learn the fundamentals of playing the piano.',
          Instructor: 'John Smith',
          Instrument: 'Piano',
          dayOfWeek: 'Monday',
          noOfStudents: 15,
          Price: '$200.00',
          Status: 'Active',
          Actions: 'Enroll'
        },
        {
          Name: 'Guitar',
          Description: 'Introduction to playing the guitar for beginners.',
          Instructor: 'Jane Doe',
          Instrument: 'Guitar',
          dayOfWeek: 'Wednesday',
          noOfStudents: 12,
          Price: '$180.00',
          Status: 'Active',
          Actions: 'Enroll'
        },
        {
          Name: 'Drumming',
          Description: 'Master advanced drumming techniques.',
          Instructor: 'Mike Johnson',
          Instrument: 'Percussion',
          dayOfWeek: 'Tuesday',
          noOfStudents: 10,
          Price: '$250.00',
          Status: 'Active',
          Actions: 'Enroll'
        },
        {
          Name: 'Violin',
          Description: 'Start your journey into playing the violin.',
          Instructor: 'Sarah Brown',
          Instrument: 'Violin',
          dayOfWeek: 'Thursday',
          noOfStudents: 8,
          Price: '$220.00',
          Status: 'Closed',
          Actions: 'Enroll'
        },
        {
          Name: 'Saxophone',
          Description: 'Become a saxophone virtuoso with this course.',
          Instructor: 'David Wilson',
          Instrument: 'Saxophone',
          dayOfWeek: 'Friday',
          noOfStudents: 10,
          Price: '$280.00',
          Status: 'Closed',
          Actions: 'Enroll'
        },
        {
          Name: 'Piano Techniques',
          Description: 'Take your piano skills to the next level.',
          Instructor: 'Emily White',
          Instrument: 'Piano',
          dayOfWeek: 'Wednesday',
          noOfStudents: 12,
          Price: '$280.00',
          Status: 'Active',
          Actions: 'Enroll'
        },
        {
          Name: 'Flute',
          Description: 'Learn the basics of playing the flute.',
          Instructor: 'Michael Green',
          Instrument: 'Flute',
          dayOfWeek: 'Monday',
          noOfStudents: 14,
          Price: '$210.00',
          Status: 'Archived',
          Actions: 'Enroll'
        },
        {
          Name: 'Guitar',
          Description: 'Explore the world of electric guitar playing.',
          Instructor: 'Susan Davis',
          Instrument: 'Guitar',
          dayOfWeek: 'Thursday',
          noOfStudents: 9,
          Price: '$220.00',
          Status: 'Archived',
          Actions: 'Enroll'
        },
        {
          Name: 'Drum Solo',
          Description: 'Learn to perform captivating drum solos.',
          Instructor: 'Daniel Jackson',
          Instrument: 'Percussion',
          dayOfWeek: 'Tuesday',
          noOfStudents: 7,
          Price: '$270.00',
          Status: 'Archived',
          Actions: 'Enroll'
        },
        {
          Name: 'Trumpet Essentials',
          Description: 'Master the essential skills of playing the trumpet.',
          Instructor: 'Laura Anderson',
          Instrument: 'Trumpet',
          dayOfWeek: 'Wednesday',
          noOfStudents: 11,
          Price: '$230.00',
          Status: 'Active',
          Actions: 'Enroll'
        }
      ];

    return (

        <>
            <div className="p-2 bg-gray-200 w-[95vw] min-h-[100vh] flex items-center">
                <div className="flex flex-col items-center w-11/12 justify-center">
                    <div className="flex justify-start items-start w-10/12 my-3 mx-3">
                        <p className="text-2xl font-semibold">
                            Courses
                        </p>
                    </div>
                    <div className="w-11/12 flex flex-col justify-center items-center my-3">
                        <div className="flex flex-row w-full justify-between my-3">
                            <p className="text-md font-semibold text-gray-600">
                                COURSE LIST
                            </p>
                            <p className="text-sm text-red-700 cursor-pointer">
                                view
                            </p>
                        </div>

                        {/* Table Component */}

                        <Table className="bg-white rounded-lg">
                            <TableHeader>
                                <TableRow >
                                    <TableHead>Name</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Instructor</TableHead>
                                    <TableHead>Instrument</TableHead>
                                    <TableHead>Day of week</TableHead>
                                    <TableHead># of students</TableHead>
                                    <TableHead>Price </TableHead>
                                    <TableHead>Status </TableHead>
                                    <TableHead>Actions </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {courseData.map((elem, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium items-center">
                                                {elem.Name}
                                            </TableCell>
                                            <TableCell>{elem.Description.slice(0,8)}</TableCell>
                                            <TableCell>{elem.Instructor} </TableCell>
                                            <TableCell >{elem.Instrument}</TableCell>
                                            <TableCell>{elem.dayOfWeek}</TableCell>
                                            <TableCell>{elem.noOfStudents}</TableCell>
                                            <TableCell>{elem.Price}</TableCell>
                                            <TableCell>{elem.Status}</TableCell>
                                            <TableCell>{elem.Actions}</TableCell>

                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}
