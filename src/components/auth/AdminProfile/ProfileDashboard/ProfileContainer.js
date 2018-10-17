import React from 'react'
import styles from '../Styles.module.css'
import ProfileMenu from "././ProfileMenu";
import ProfileRoutes from "././ProfileRoutes";

class ProfileContainer extends React.Component {

  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user) return this.props.history.push('/login');
  }

  render() {
    return (
      <div className={styles.container} >
          <ProfileMenu {...this.props} />
          <div style={{zIndex: 1}}>
          <ProfileRoutes/>
          <div >
      </div>
      </div>
      </div>
    )
  }
}

export default ProfileContainer;