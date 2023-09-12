import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const LatestEnrollment: React.FC = () => {
    const courseInvoices = [
        { invoiceId: 'NV001', studentName: 'John Doe', courseName: 'Percussion', feesPaid: '$250.00', enrollmentDate: '12-08-2023' },
        { invoiceId: 'NV002', studentName: 'Jane Smith', courseName: 'Guitar', feesPaid: '$200.00', enrollmentDate: '11-15-2023' },
        { invoiceId: 'NV003', studentName: 'Bob Johnson', courseName: 'Piano', feesPaid: '$300.00', enrollmentDate: '10-22-2023' },
        { invoiceId: 'NV004', studentName: 'Alice Brown', courseName: 'Violin', feesPaid: '$275.00', enrollmentDate: '09-05-2023' },
        { invoiceId: 'NV005', studentName: 'Ella Wilson', courseName: 'Saxophone', feesPaid: '$275.00', enrollmentDate: '08-30-2023' }
      ];
      

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
                            <TableHead className="">Enr. No</TableHead>
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
                            <TableCell className="font-medium items-center">
                                {elem.invoiceId}
                                </TableCell>
                            <TableCell>{elem.studentName}</TableCell>
                            <TableCell>{elem.courseName} </TableCell>
                            <TableCell >{elem.feesPaid}</TableCell>
                            <TableCell>{elem.enrollmentDate}</TableCell>
                        </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </div>
        </>
    )
}