import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ProfileDescription from "../../AdminProfile/ProfileDescription";
import GuestListContainer from "../GuestList/GuestListContainer";
// import MapLocationContainer from "../MapLocation/MapLocationContainer";
//import ProfileLocation from "../ProfileLocation"
import MapLocationContainer from '../MapLocation/MapLocationContainer'
import ProfileInfo from '../ProfileInfo'


class ProfileRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/user/profile' component={ProfileDescription} />
        <Route path='/user/guests' component={GuestListContainer} />
        <Route path='/user/location' component={MapLocationContainer} />
        <Route path='/user/info' component={ProfileInfo} />

      </Switch>
      )
    }
  }

export default ProfileRoutes;