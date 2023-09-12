import { Courses } from "@/layouts/Courses"
import Sidebar from "../components/Sidebar"
// import Home from "../layouts/Home"

const Dashboard = () => {
    return (
      <>
      <div className="flex flex-row">
          <Sidebar/>
          <Courses />
      </div>
      </>
    )
  }
  
  export default Dashboard