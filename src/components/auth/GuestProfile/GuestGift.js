import React, {Component} from 'react'
import styles from './Styles.module.css'
import {Card} from 'antd'
// import NewWindow from 'react-new-window'


class GuestGift extends Component {
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
  }
  
  render() {
    
    return (
     <div>
      <img 
        src={require('../../../images/wm-01.png')} 
        alt='wm' 
        style={{width: '50%', marginTop: '14px', marginRight: '200px'}}/>
        <div  className={styles.flexG}>
        <Card 
        style={{marginRight:'1%'} }
        hoverable={true} 
        title='Mesa de Regalos Liverpool' 
        cover={<a href='https://mesaderegalos.liverpool.com.mx/'><img src='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/cd/a7/2b/cda72b40-c541-f0c6-ad09-34ce9548ff83/AppIcon-1x_U007emarketing-85-220-0-3.png/246x0w.jpg' alt="profile_picture" width='250px'/></a>}
        >
        <div class='card-body'>
        <p>Mesa de regalo: 123456789</p>
        </div>
        </Card>
        
        <Card 
        style={{marginRight:'1%' }}
        hoverable={true} 
        title='Mesa de Regalos Palacio'
        cover={<a href='https://www.elpalaciodehierro.com/celebra/search'><img src='https://asset3.zankyou.com/images/gift-detail/5b9/18be/434//-/783/ac2/1f7/1504034939.png' alt="palacio" width='250px' /></a>}
          >
          <br/>
          <div class='card-body'>
          <p>Evento: 123456789</p>
          </div>
        </Card>

        <Card 
        style={{ marginRight:'1%' } }
        hoverable={true} 
        title='Mesa de Regalos Zara Home' 
        cover={<img src='https://cdn.shopify.com/s/files/1/0899/2262/files/424_medium.png?98663997157997807' alt="profile_picture" width='180px'  />}
          >
          <br/>
          <div class='card-body'>
          <p>Mesa de regalo: 123456789</p>
          </div>
        
        </Card>
      </div>
      </div>
    )
  }
}

export default GuestGift