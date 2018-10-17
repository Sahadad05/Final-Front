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
      
      <div className={styles.flex20}>
      <img 
        src={require('../../../images/wm-01.png')} 
        alt='wm' 
        style={{width: '50%', marginTop: '14px', marginRight: '200px'}}/>
      <Card 
          hoverable={true} 
          title='Fecha y Lugar'
          style={{ width: 300, height:160,marginRight:'15%' }}>
          
          <p>Hacienda de los Morales</p>
          <p>20 / Oct / 2018</p>
          <p>19:00</p>
        </Card>
          
          <div className={styles.flex2}>
        <Card 
          hoverable={true} 
          title='Dress code Woman' 
          style={{ width: 240, marginRight:'5%' }}
          cover={<img 
            alt="example" 
            src="http://www.gothic-party.info/wp-content/uploads/blue-formal-dress-for-a-wedding-guest-semi-formal-dress-code.jpg"
            // onClick={() => this.props.cardClicked()}
            />}
        />

        <Card 
          hoverable={true} 
          title='Dress code Man' 
          style={{ width: 240, marginRight:'1%', height: 330 }}
          cover={<img alt="example" src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/05/pocket_square_black_tie_outfit_tuxedo_bow_tie_white_dress_shirt_patent_formal_shoes-1.jpg" />}
        />
        </div> 
        </div>

    )
  }
}

export default GuestInfo