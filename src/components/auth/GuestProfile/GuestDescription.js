import React, {Component} from 'react'
import styles from './Styles.module.css'
import fotito from '../../../images/photo.jpg'
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
        <img 
        src={require('../../../images/wm-01.png')} 
        alt='wm' 
        style={{width: '50%', marginTop: '0px'}}/>
        
        <div>
        <Card 
        className={styles.tarjeta} 
        style={{marginTop: '10px', marginLeft:"0px"}}
        hoverable={true} 
        title='¡Bienvenido a nuestra boda!'> 
          <img 
          className={styles.fotito} 
          src={user.photoURL || fotito} 
          alt="profile_picture" 
          // width='250px' 
          // height='280px'
          // paddin='0' 
          // style={{marginRight:'200px'}}
          />
          <h2>{user.username}</h2>
        </Card>
      </div>
      </div>
    )
  }
}

export default GuestDescription