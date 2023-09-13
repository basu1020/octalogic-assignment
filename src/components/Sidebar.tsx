import React, { useContext, useState } from 'react'
import logoPng from '../assets/Logo-main.png'
import HomeVector from "../assets/Home-Vector.svg"
import CoursesVector from "../assets/ic_outline-queue-music.svg"
import LogoutVector from "../assets/Logout-logo.svg"
import { AppContext } from '@/contexts/appContext'
import { useNavigate } from 'react-router-dom'

export const Sidebar: React.FC = () => {
    const appContext = useContext(AppContext)
    const navigate = useNavigate()

    const selectedClass = "flex flex-col cursor-pointer items-center w-[54px] justify-center my-2 bg-pink-300 p-1 border rounded-lg text-[#901E75] text-xs"

    const notSelectedClass = "flex flex-col cursor-pointer items-center w-[54px] justify-center my-2 bg-gray-300 p-1 border rounded-lg text-gray-500 text-xs"

    return (
        <>
            <div className="flex flex-col w-[5vw] h-[100vh] justify-between">
                <div className="flex items-center flex-col">
                    <div className='w-full h-[48px] flex items-center flex-col'>
                        <img src={logoPng} alt="logo" />
                    </div>
                    <div className="w-full h-[48px] mt-4 flex items-center flex-col">
                        <div className={appContext.currTab.value === "Home" ? selectedClass : notSelectedClass}
                            onClick={() => {
                                appContext.setCurrTab({ value: "Home" })
                            }}>
                            <img src={HomeVector} alt="home-logo" />
                            <p>
                                Home
                            </p>
                        </div>
                        <div className={appContext.currTab.value === "Courses" ? selectedClass : notSelectedClass}
                            onClick={() => {
                                appContext.setCurrTab({ value: "Courses" })
                            }}>
                            <img src={CoursesVector} alt="home-logo" />
                            <p>
                                Courses
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center w-[54px] justify-center my-2 p-1 cursor-pointer" onClick={() => {
                        localStorage.setItem('dashboard-loggedIn', 'false')
                        navigate("/")
                    }}>
                        <img src={LogoutVector} alt="home-logo" />
                        <p className='text-gray-500 text-xs'>
                            Logout
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
