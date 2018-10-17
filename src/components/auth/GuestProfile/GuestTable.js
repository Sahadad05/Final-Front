import React, {Component} from 'react'
import styles from './Styles.module.css'
import mesa from '../../../images/croquis.jpg'
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
        className={styles.tarjeta2} 
        style={{marginTop: '10px', marginLeft:"0px"}}
        hoverable={true} 
        title='Tu mesa es : Mesa 5'> 
          <img 
          className={styles.fotito2} 
          style={{zIndex:'1'}}
          src={mesa} 
          alt="profile_picture" 
          // width='250px' 
          // height='280px'
          // paddin='0' 
          // style={{marginRight:'200px'}}
          />
        </Card>
      </div>
      </div>
    )
  }
}

export default GuestDescription