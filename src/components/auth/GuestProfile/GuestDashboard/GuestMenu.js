import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
import styles from '../Styles.module.css'
import logo from '../../../../images/flores.png'


class GuestMenu extends Component {
  
  logOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }
  
  render() {
    let path = this.props.location.pathname.split('/').slice(0,-1).join('/')
    return (
      <div className={styles.panel}>
        <Menu mode='inline' theme='light' defaultSelectedKeys={[this.props.location.pathname]} defaultOpenKeys={[path]} style={{height:'100vh'}}>
          
          <Menu.Item style={{height:'auto',textAlign:'center',marginTop:'50px',marginBottom:'50px'}} disabled={true}>
            <img src={logo} alt="logo" width='80%'/>
          </Menu.Item>
          
          <Menu.Item key='/guest/profile'>
            <Link to='/guest/profile'>
              <Icon type="user" theme="outlined" /><span>Profile</span>
            </Link>
          </Menu.Item>
  
          <Menu.Item key='/guest/info'>
            <Link to='/guest/info'>
              <Icon type="info" theme="outlined" /><span>Info</span>
            </Link>
          </Menu.Item>
  
  
          <Menu.Item key='/guest/location'>
            <Link to='/guest/location'>
              <Icon type="heat-map" theme="outlined"/><span>Location</span>
            </Link>
          </Menu.Item>
  
          
          <Menu.Item key='/guest/gift'>
            <Link to='/guest/gift'>
              <Icon type="gift" theme="outlined" /><span>Gift Something</span>
            </Link>
          </Menu.Item>
  
          <Menu.Item key='/guest/music'>
            <Link to='/guest/music'>
              <Icon type="customer-service" theme="outlined" /><span>Choose some Music</span>
            </Link>
          </Menu.Item>
          
          <Menu.Item key='/guest/guests' style={{display:'none'}}>
            <Link to='/guest/guests'>
              <Icon type="team" theme="outlined"/><span>Guests</span>
            </Link>
          </Menu.Item>
          
          
          
          <Menu.Item onClick={this.logOut} key='/guest/logout'>
            <Link to='/guest/logout'>
              <Icon type='poweroff'/><span>Logout</span>
            </Link>
          </Menu.Item>
          
        </Menu>
      </div>
    )
  }
}

export default GuestMenu;