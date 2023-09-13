import React, { useContext } from "react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { AppContext } from "@/contexts/appContext";

export const BestStudents: React.FC = () => {

    const appContext = useContext(AppContext)
    const courseInvoices = appContext.appInfo.data.bestStudents

    return (
        <>
            <div className="w-11/12 flex flex-col justify-center items-center my-3">
                <div className="flex flex-row w-full justify-between my-3">
                    <p className="text-md font-semibold text-gray-600">
                        BEST STUDENTS
                    </p>
                    <p className="text-sm text-red-700 cursor-pointer">
                        View All Students
                    </p>
                </div>

                {/* Table Component */}

                <Table className="bg-white rounded-lg">
                    <TableHeader>
                        <TableRow >
                            <TableHead className="">Reg. No.</TableHead>
                            <TableHead>F.Name</TableHead>
                            <TableHead>L.Name</TableHead>
                            <TableHead >Course #</TableHead>
                            <TableHead>Total Fees</TableHead>
                            <TableHead>Reg.Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courseInvoices.map((elem, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell className="font-medium items-center">
                                        {elem.RegNo}
                                    </TableCell>
                                    <TableCell>{elem.FName}</TableCell>
                                    <TableCell>{elem.LName} </TableCell>
                                    <TableCell >{elem.CourseNo}</TableCell>
                                    <TableCell>{elem.TotalFees}</TableCell>
                                    <TableCell>{elem.RegDate}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </div>
        </>
    )
}