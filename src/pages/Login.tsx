import React, { useContext, useEffect } from "react"
import { UserAuthentication } from "@/components/UserAuthentication"
import { AppContext } from "@/contexts/appContext"
import { useNavigate } from "react-router-dom"


const Login: React.FC = () => {
    const appContext = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('dashboard-loggedIn') === 'true') {
            let appInfoJSON = localStorage.getItem('appInfo')
            const appInfo = appInfoJSON ? JSON.parse(appInfoJSON) : null
            appContext.setAppInfo(appInfo)
            navigate("/dashboard")
        }
    }, [])

    return (
        <div className='flex flex-col justify-center align-middle items-center h-full w-full bg-green-200 m-auto'>
            <div className="flex flex-col justify-center w-[80vw] align-middle h-[99vh] m-4">
                <p className='text-4xl'>
                    Administrator
                </p>
                <p className='mt-4'>
                    As the administrator of a music school, I will need to be able to create courses, view enrolments and review analytics for the entire school. I should also be able to see a cumulative view of all students in the school regardless of the course. Only I should be able to access this data through a username and password.
                </p>
                <div className="m-2 h-[60vh] flex flex-col justify-center items-center">
                    <UserAuthentication />

                </div>
                <div className="flex flex-row items-start">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Login