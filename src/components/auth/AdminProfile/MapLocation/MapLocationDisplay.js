import React from 'react'
import {Input,Button} from 'antd'
import MapLocationS from './MapLocationS'

const Location = ({onSubmit,onChange}) =>{

    return (
        <div>
            <form onSubmit = {onSubmit} style={{width:600,margin:'0 auto',padding:20}}>
            <h1>Ubicación</h1>
            <p>
                   <Input 
                   name="title"
                   placeholder="Lugar (Salón, Iglesia, Jardín"
                   type="text"
                   onChange={onChange} 
                   />
            </p> 
            <p>
                   <Input 
                   name="Address"
                   placeholder="Dirección, referencias"
                   type="text"
                   onChange={onChange} 
                   />
            </p>               

            <Button type="primary" htmlType="submit">Agregar</Button>
            </form>
            <br/>
            <MapLocationS/>
        </div>
)}

export default Location