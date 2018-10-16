import React, {Component} from 'react'
import styles from './Styles.module.css'
import {Card} from 'antd'

class GuestInfo extends Component {
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
  }
  
  render() {

    return (
      
      <div className={styles.flex2}>
      
      <Card 
      hoverable={true} 
      title='DressCode' 
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
     
    </Card>        
      </div>
    )
  }
}

export default GuestInfo