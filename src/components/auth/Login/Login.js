import React, {Component} from 'react'
import {Input, Button} from 'antd'
import axios from 'axios'
import toastr from 'toastr'
import '../../home.css'

const url = 'http://localhost:3000/auth/login'

class Login extends Component{

    state = {
        auth:{},
        loading:false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.state
        axios.post(url, auth)
        .then(res=>{
            console.log(res)
            toastr.success("Acceso autorizado")
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            this.setState({loading:false})
            const acceso = this.props.history
            const usuario = JSON.parse(localStorage.getItem('user'))
            if (usuario.role === 'admin') return acceso.push('/user')
            return acceso.push('/guest')

        })
        .catch(e=>{
            toastr.error("Acceso denegado")
            this.setState({loading:false})
            
        })
    }

    onChange = (e) => {
        const field     = e.target.name
        const value     = e.target.value
        const {auth}    = this.state
        auth[field]     = value
        this.setState({auth})
    }

    render(){
        const {auth, loading} = this.state
        return(
            <div className="background">
            <form  className='infoLog' onSubmit={this.login}>
                <h2>Inicia sesión</h2>
                 
                <p>
                <Input 
                    name        ="email"
                    type        ="email"
                    onChange    ={this.onChange}
                    value       ={auth.email}
                    placeholder ="Email" 
                    />    
                </p> 

                <p>
                <Input 
                    name        ="password"
                    type        ="password"
                    onChange    ={this.onChange}
                    value       ={auth.password}
                    placeholder ="Contraseña" 
                    />    
                </p>   

                <Button loading={loading} type="primary" htmlType="submit" >Iniciar sesión</Button>
            </form>
            </div>
        )
    }
}

export default Login