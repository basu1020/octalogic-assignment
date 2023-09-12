import React from "react"
import { CardComponent } from "./CardComponent"

export const CardsListComponent: React.FC = () => {
    const dataOverview = [
        {
            name: "164",
            description: "total number of students"
        },
        {
            name: "12",
            description: "total number of courses"
        },
        {
            name: "$2000",
            description: "total amount earned"
        },
        {
            name: "Guitar",
            description: "best performing course"
        },
        {
            name: "Flute",
            description: "worst performing course"
        }
    ]
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center">
                    {dataOverview.map((elem, index) => {
                        return <CardComponent name={elem.name} description={elem.description} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}