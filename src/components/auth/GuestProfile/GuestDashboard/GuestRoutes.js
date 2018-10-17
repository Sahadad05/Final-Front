import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GuestDescription from "../GuestDescription"
import GuestMusic from '../GuestMusic'
import GuestGift from "../GuestGift";
import MapaLocationContainer from "../../AdminProfile/MapLocation/MapLocationContainer"
import GuestInfo from '../GuestInfo'
import GuestTable from '../GuestTable'

class GuestRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/guest/profile' component={GuestDescription} />
        <Route exact path='/guest/' component={() => <img src={require('../../../../images/love.jpg')} alt='shit' width='1205px' height='733px' style={{marginLeft:'35px'}}/>} />
        <Route path='/guest/music' component={GuestMusic} />
        <Route path='/guest/gift' component={GuestGift}/>
        <Route path='/guest/location' component={MapaLocationContainer} />
        <Route path='/guest/info' component={GuestInfo} />
        <Route path='/guest/table' component={GuestTable} />

      </Switch>
    )
  }
}

export default GuestRoutes;