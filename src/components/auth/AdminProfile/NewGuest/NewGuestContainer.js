import React, {Component} from 'react'
import NewGuestDisplay from '../../AdminProfile/NewGuest/NewGuestDisplay'

class NewGuestContainer extends Component{

  state= {
    email: {},
    loading: false,
  }

  render(){
    console.log(this.props);
    const {loading}= this.state
    const {sendUsers, handleChange} =  this.props
    
    return(
      <NewGuestDisplay
      sendUsers={sendUsers}
        loading={loading}
        handleChange={handleChange}
      />
    )
  }
}

export default NewGuestContainer