import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
import styles from '../Styles.module.css'
import logo from '../../../../images/flores.png'


class ProfileMenu extends Component {
  
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
          
          <Menu.Item key='/user/profile'>
            <Link to='/user/profile'>
              <Icon type="idcard" theme="outlined"/><span>Profile</span>
            </Link>
          </Menu.Item>
  
          <Menu.Item key='/user/guests'>
            <Link to='/user/guests'>
              <Icon type="team" theme="outlined"/><span>Guests</span>
            </Link>
          </Menu.Item>

           <Menu.Item key='/user/info'>
            <Link to='/user/info'>
              <Icon type="info" theme="outlined" /><span>Info</span>
            </Link>
          </Menu.Item>
          
          <Menu.Item key='/user/location'>
            <Link to='/user/location'>
              <Icon type="heat-map" theme="outlined"/><span>Location</span>
            </Link>
          </Menu.Item>
          
          <Menu.Item onClick={this.logOut} key='/user/logout'>
            <Link to='/user/logout'>
              <Icon type='poweroff'/><span>Logout</span>
            </Link>
          </Menu.Item>
          
        </Menu>
      </div>
    )
  }
}

export default ProfileMenu;