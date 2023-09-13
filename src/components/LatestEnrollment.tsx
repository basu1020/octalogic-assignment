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

export const LatestEnrollment: React.FC = () => {
    const appContext = useContext(AppContext)
    const courseInvoices = appContext.appInfo.data.latestInvoices
    
    return (
        <>
            <div className="w-11/12 flex flex-col justify-center items-center my-3">
                <div className="flex flex-row w-full justify-between my-3">
                    <p className="text-md font-semibold text-gray-600">
                        LATEST ENROLMENTS
                    </p>
                    <p className="text-sm text-red-700 cursor-pointer">
                        View All Courses
                    </p>
                </div>

                {/* Table Component */}

                <Table className="bg-white rounded-lg">
                    <TableHeader>
                        <TableRow >
                            <TableHead>Enr. No</TableHead>
                            <TableHead>S.Name</TableHead>
                            <TableHead>C.Name</TableHead>
                            <TableHead >Fees</TableHead>
                            <TableHead>Enr. Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courseInvoices.map((elem, index) => {
                            return (
                        <TableRow key={index}>
                            <TableCell>
                                {elem.invoiceId}
                                </TableCell>
                            <TableCell className="text-center">{elem.studentName}</TableCell>
                            <TableCell>{elem.courseName} </TableCell>
                            <TableCell >{elem.feesPaid}</TableCell>
                            <TableCell >{elem.enrollmentDate}</TableCell>
                        </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </div>
        </>
    )
}