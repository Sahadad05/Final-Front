import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GuestDescription from "../GuestDescription"
import GuestMusic from '../GuestMusic'
import GuestGift from "../GuestGift";
import MapaLocationContainer from "../../AdminProfile/MapLocation/MapLocationContainer"
import GuestInfo from '../GuestInfo'

class GuestRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/guest/profile' component={GuestDescription} />
        <Route path='/guest/music' component={GuestMusic} />
        <Route path='/guest/gift' component={GuestGift}/>
        <Route path='/guest/location' component={MapaLocationContainer} />
        <Route path='/guest/info' component={GuestInfo} />

      </Switch>
    )
  }
}

export default GuestRoutes;