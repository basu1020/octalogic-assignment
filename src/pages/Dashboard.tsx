import Sidebar from "../components/Sidebar"
import Home from "../components/Home"

const Dashboard = () => {
    return (
      <>
      <div className="flex flex-row">
          <Sidebar/>
          <Home/>
      </div>
      </>
    )
  }
  
  export default Dashboard