import React from 'react'
import {Input, Button} from 'antd'
import styles from '../Styles.module.css'
//import {sendUsers} from '../../../../services/userService';


const {TextArea} = Input

const NewGuestDisplay = ({sendUsers, loading, handleChange}) =>{
  return(
    <div >
      <form
      onSubmit={sendUsers} 
      >


        <h1>Agregar Invitados</h1>

        <TextArea
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="email@email.com,email2@email2.com" 
            autosize
            />     

        <br/>
        <br/>

        <Button 
          loading={loading} 
          type="primary" 
          htmlType="submit" >Agregar
        </Button>
        
      </form>
    </div>
  )
}

export default NewGuestDisplay