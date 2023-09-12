import logoPng from '../assets/Logo-main.png'
import HomeVector from "../assets/Home-Vector.svg"
import CoursesVector from "../assets/ic_outline-queue-music.svg"
import LogoutVector from "../assets/Logout-logo.svg"

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col w-[5vw] h-[100vh] justify-between">
                <div className="flex items-center flex-col">
                    <div className='w-full h-[48px] flex items-center flex-col'>
                        <img src={logoPng} alt="logo" />
                    </div>
                    <div className="w-full h-[48px] mt-4 flex items-center flex-col">
                        <div className="flex flex-col items-center w-[54px] justify-center my-2 bg-pink-300 p-1 border rounded-lg">
                            <img src={HomeVector} alt="home-logo" />
                            <p className='text-[#901E75] text-xs'>
                                Home
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-[54px] justify-center my-2 bg-gray-300 p-1 border rounded-lg">
                            <img src={CoursesVector} alt="home-logo" />
                            <p className='text-gray-500 text-xs'>
                                Courses
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center w-[54px] justify-center my-2 p-1">
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

export default Sidebar