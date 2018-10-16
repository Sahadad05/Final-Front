import React, {Component} from 'react'
import styles from './Styles.module.css'
import logo from '../../../images/flores.png'
import {Card} from 'antd'

class GuestDescription extends Component {
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
  }
  
  render() {
    const {user} = this.state
    return (
      <div className={styles.flex}>
        <Card hoverable={true} title='¡Bienvenido a nuestra boda!'> 
          <img src={user.photoURL || logo} alt="profile_picture" width='20%'/>
          <h2>{user.username}</h2>
        </Card>
      </div>
    )
  }
}

export default GuestDescription