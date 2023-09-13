import React, { useContext, useEffect } from "react"
import { Courses } from "@/layouts/Courses"
import { Sidebar } from "../components/Sidebar"
import { AppContext } from "@/contexts/appContext"
import Home from "@/layouts/Home"
import { useNavigate } from "react-router-dom"

const Dashboard: React.FC = () => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('dashboard-loggedIn') === 'true'){
      let appInfoJSON = localStorage.getItem('appInfo')
      const appInfo = appInfoJSON ? JSON.parse(appInfoJSON) : null
      appContext.setAppInfo(appInfo)
    }
    else{
      navigate("/")
    }
  }, [])

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