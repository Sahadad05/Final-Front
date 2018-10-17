import React from 'react'
import styles from '../Styles.module.css'
import GuestMenu from '././GuestMenu'
import GuestRoutes from "././GuestRoutes";

class GuestContainer extends React.Component {
  
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user) return this.props.history.push('/login');
  }
  
  render() {
    return (
      <div className={styles.container}>
        <GuestMenu {...this.props}/>
        <div style={{zIndex: 1}}>
        <GuestRoutes/>
      </div>
      </div>
    )
  }
}


export default GuestContainer;