import React, {Component} from 'react'
import styles from './Styles.module.css'
import logo from '../../../images/flores.png'
import {Card} from 'antd'
import GuestPlaylistContainer from '../GuestProfile/GuestDashboard/GuestPlaylist/GuestPlaylistContainer'

class GuestMusic extends Component {
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
  }
  
  render() {
    const {user} = this.state
    return (
      <div>
        <GuestPlaylistContainer/>
      <div className={styles.flex}>
        <Card hoverable={true} title='Music'>
          <img src={user.photoURL || logo} alt="profile_picture" width='20%'/>
        </Card>
      </div>
      </div>
    )
  }
}

export default GuestMusic