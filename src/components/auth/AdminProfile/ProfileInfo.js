import React, {Component} from 'react'
import styles from './Styles.module.css'
import {Card} from 'antd'
import ProfileInfoDisplay from './ProfileInfoDisplay'


class GuestInfo extends Component {
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
  }
  
  render() {

    return (
      
      <div className={styles.flex}>

        <div className={styles.flexdiego}>
          <ProfileInfoDisplay/>
        </div>

        <div className={styles.flex3}>
        <Card 
          hoverable={true} 
          title='Dress code Woman' 
          style={{ width: 240, marginRight:'1%' }}
          cover={<img 
            alt="example" 
            src="http://www.gothic-party.info/wp-content/uploads/blue-formal-dress-for-a-wedding-guest-semi-formal-dress-code.jpg"
            // onClick={() => this.props.cardClicked()}
            />}
        />

        <Card 
          hoverable={true} 
          title='Dress code Man' 
          style={{ width: 240, marginRight:'1%' }}
          cover={<img alt="example" src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/05/pocket_square_black_tie_outfit_tuxedo_bow_tie_white_dress_shirt_patent_formal_shoes-1.jpg" />}
        />
        </div> 
      </div>
    )
  }
}

export default GuestInfo