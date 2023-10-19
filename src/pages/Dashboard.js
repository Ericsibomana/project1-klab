import React from 'react'
import BlogDashboard from '../components/Dashboard/BlogDashboard'
import DashboardNavBar from '../components/Dashboard/DashboardNavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Dashboard() {
  return (
    <div className='dashboard-container'>
        <div className="add-new">
           <div className="add-new-btn">
           <Link to="/add new blog"><button><p>Add New</p> <FontAwesomeIcon icon={faPlus} className='plus-icon'/></button></Link>
           </div>
        </div>
        <DashboardNavBar />
        <BlogDashboard />
    </div>
  )
}

export default Dashboard