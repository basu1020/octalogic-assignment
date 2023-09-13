import React, { useContext } from "react"
import { CardComponent } from "./CardComponent"
import { AppContext } from "@/contexts/appContext"

export const CardsListComponent: React.FC = () => {
    const appContext = useContext(AppContext)
    const cardsList = appContext.appInfo.data.cardsList

    return (
        <>
            <div className="flex flex-col justify-center w-full items-center">
                <div className="flex flex-row w-11/12 items-center justify-evenly">
                    {cardsList.map((elem, index) => {
                        return <CardComponent name={elem.name} description={elem.description} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}