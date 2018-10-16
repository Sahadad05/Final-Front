import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup/Signup'
import Login from './components/auth/Login/Login'
import ProfileContainer from './components/auth/AdminProfile/ProfileDashboard/ProfileContainer'
// import PublicProfile from './components/users/PublicProfile'
// import Fotos from './components/auth/Fotos'
import GuestContainer from "./components/auth/GuestProfile/GuestDashboard/GuestContainer";
import GuestListContainer from "./components/auth/AdminProfile/GuestList/GuestListContainer";
import MapLocationContainer from './components/auth/AdminProfile/MapLocation/MapLocationContainer'
import GuestInfo from './components/auth/GuestProfile/GuestInfo'
import ProfileInfo from './components/auth/AdminProfile/ProfileInfo'
import Home from './components/Home'

const Routes = () =>{
  return(
  <Switch>
    <Route path='/signup' component={Signup} />
    <Route path='/login' component={Login} /> 
    <Route path="/user" component={ProfileContainer}/>
    {/*<Route path="/users/:id" component={PublicProfile} />*/}
    {/*<Route path='/fotos' component={Fotos} />*/}
    <Route path='/guest' component={GuestContainer} />
    <Route path='/guests' component={GuestListContainer}/>
    <Route path='/user/location' component={MapLocationContainer}/>
    <Route path="/guest/info" component={GuestInfo} />
    <Route path="/user/info" component={ProfileInfo} />
    <Route exact path='/' component={Home} />


  </Switch>

  )
}

export default Routes