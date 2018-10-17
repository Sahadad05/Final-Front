import React, {Component} from 'react'
import styles from './Styles.module.css'
import fotito from '../../../images/adult-bridal-bride-265854.jpg'
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
        <img 
        src={require('../../../images/wm-01.png')} 
        alt='wm' 
        style={{width: '50%', marginTop: '-50px'}}/>

        <div>
        <Card  
        className={styles.tarjeta} 
        hoverable={true} >
          <img 
          className={styles.fotito} 
          src={user.photoURL || fotito} 
          alt="profile_picture" width='20%'/>
          {/* <h2>{user.username}</h2> */}
        </Card>
        
        </div>
        </div>
    )
  }
}

export default ProfileDescription