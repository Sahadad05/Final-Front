import React, {Component} from 'react'
import styles from './Styles.module.css'
import logo from '../../../images/flores.png'
import {Card} from 'antd'

class ProfileDescription extends Component {
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
  }
  
  render() {
    const {user} = this.state
    return (
      <div className={styles.flex}>
        <Card hoverable={true} title='¡Que vivan los novios!'>
          <img src={user.photoURL || logo} alt="profile_picture" width='20%'/>
          <h2>{user.username}</h2>
        </Card>
      </div>
    )
  }
}

export default ProfileDescription