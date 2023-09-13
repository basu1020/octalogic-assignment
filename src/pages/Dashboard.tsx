import React, { useContext } from "react"
import { Courses } from "@/layouts/Courses"
import { Sidebar } from "../components/Sidebar"
import { AppContext } from "@/contexts/appContext"
import Home from "@/layouts/Home"

const Dashboard: React.FC = () => {
  const appContext = useContext(AppContext)

  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        {appContext.currTab.value === "Courses" ? <Courses />: ""}
        {appContext.currTab.value === "Home" ? <Home />: ""}
      </div>
    </>
  )
}

export default Dashboard