import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Route, Routes, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Supplies from './Components/Supplies';
import Order from './Components/Order';
import Billing from './Components/Billing';
import Logout from './Components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import Reports from './Components/Reports';
import Appointment from './Components/Appointment';
import AdminHome from './Components/AdminHome';
import StaffHome from './Components/StaffHome';
import UserDetails from './Components/UserDetails';
import PublicHome from './Components/PublicHome';
import Query from './Components/Query';


function App() {
  //Checking if User is Logged IN

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(false);

  const isLoggedIn = async () => {
    try {
      const res =  await fetch('/auth', {
        method: 'GET',
        headers : {
          Accept : "application/json",
          'Content-Type' : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401) {
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (

    <>
      {/* <Dashboard/> */}
      {/* <Navbar/> */}
      <Switch>
        <Route exact path='/' component={PublicHome}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/query' component={Query}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/login' component={Login}/>
        <ProtectedRoute exact path='/userdetails' component={UserDetails} auth={auth1}/>
        <ProtectedRoute exact path='/adminhome' component={AdminHome} auth={auth1}/>
        <ProtectedRoute exact path='/staffhome' component={StaffHome} auth={auth1}/>
        <ProtectedRoute exact path='/register' component={Register} auth={auth1}/>
        <ProtectedRoute exact path='/dashboard' component={Dashboard} auth={auth1}/>
        <ProtectedRoute exact path='/logout' component={Logout} auth={auth1}/>
        <ProtectedRoute exact path='/supplies' component={Supplies} auth={auth1} />
        <ProtectedRoute exact path='/order' component={Order} auth={auth1} />
        <ProtectedRoute exact path='/billing' component={Billing} auth={auth1} />
        <ProtectedRoute exact path='/reports' component={Reports} auth={auth1} />
        <ProtectedRoute exact path='/appointment' component={Appointment} auth={auth1} />
      </Switch>
      {/* <Dashboard/> */}
      <Footer/>
      </>
  );
}
export default App;
