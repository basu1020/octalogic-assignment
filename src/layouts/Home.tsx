import React from "react"
import { BestStudents } from "@/components/BestStudent"
import { CardsListComponent } from "@/components/CardsList"
import { LatestEnrollment } from "@/components/LatestEnrollment"

export const Home: React.FC = () => {
    return (
      <>
      <div className="p-2 w-[95vw] min-h-[100vh] bg-gray-200">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start items-start w-11/12 my-3 ">
              <p className="text-2xl font-semiold">
                Overview
              </p>
            </div>
            <CardsListComponent />
            <LatestEnrollment/>
            <BestStudents/>
          </div>
      </div>
      </>
    )
  }
  
  export default Home