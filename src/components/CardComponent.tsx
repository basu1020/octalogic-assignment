import React from "react"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import peopleSvg from "@/assets/ic_baseline-people.svg"

interface Iprops {
    name: String,
    description: String
}

export const CardComponent: React.FC<Iprops> = ({ name, description }) => {
    return (
        <>
            <Card className="w-[240px] m-2">
                <CardHeader className="flex flex-row justify-center p-2">
                    <div className="flex flex-col items-center justify-center m-3">
                        <img src={peopleSvg} alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-center m-3">
                        <CardTitle>
                            <p className="text-md">
                                {name}
                            </p>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-xs">
                                {description}
                            </p>
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardFooter className="flex flex-row text-red-900 justify-end text-xs items-end p-1 me-5 mb-2">
                    <button>
                        View
                    </button>
                </CardFooter>
            </Card>
        </>
    )
}
