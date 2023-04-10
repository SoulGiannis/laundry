import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom'
const AdminHome = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    getAllUser();
  },[]);
  const getAllUser = () => {
    fetch("/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
    }
  
  
  const deleteUser = (id, name) => {
    if (window.confirm(`Delete user ${name}`)){
      fetch("/deleteUser", {
      method: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userId:id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        alert(data.data);
        getAllUser();
      });
    }
}
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <h3>Admin Panel</h3>
      </ul>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    </div>
  </div>s
</nav>
    </div>
    <div className='center'>
      <table className='size' style={{border:"1px solid black"}}>
        <tr style={{border:"2px solid black"}}>
          <th className='heading' style={{border:"2px solid black"}}>Name</th>
          <th className='heading' style={{border:"2px solid black"}}>Email</th>
          <th className='heading' style={{border:"2px solid black"}}>User Type</th>
          <th className='heading' style={{border:"2px solid black"}}>Delete</th>
        </tr>
        {data.map((i, key) => {
          return (
            <tr>
              <th style={{border:"2px solid black"}} key={key}>{i.username}</th>
              <th style={{border:"2px solid black"}} key={key}>{i.email}</th>
              <th style={{border:"2px solid black"}} key={key}>{i.userType}</th>
              <th style={{border:"2px solid black", cursor:"pointer"}} onClick={()=>deleteUser(i._id, i.username)} key={key}>Delete</th>
            </tr>
            )
        })
          
        }
      </table>
    </div>
    </div>
  )
}

export default AdminHome