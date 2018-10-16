import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import logo from '../../images/flores.png'
import { getUserData } from '../../services/userService';
import Gallery from '../auth/Gallery';



class PublicProfile extends Component{

    state = {
        user:{pictures:[]},
        loggedUser:{}
    }

    componentWillMount(){
       const {id} = this.props.match.params
       this.getUserData(id)
       const user = JSON.parse(localStorage.getItem('user'))
       this.setState({loggedUser:user})
    }

    getUserData = (id) => {
        getUserData(id)
        .then(user=>{
            this.setState({user})
        })
        .catch(e=>toastr.error("Error, intenta mas tarde"))
    }

    getPrivateInfo = () => {
        axios.get('http;//localhost:3000/private', {
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(e=>toastr.error("Oops! Algo salió mal", e.message))
    }


    render(){
        const {user} = this.state
        console.log(user)
        return(
            <div>
                <img style={{borderRadius:'50%'}} src={user.photoURL || logo} width="200" alt="user"/>
                <br/>
                <h1>{user.email}</h1>
                <button onClick={this.getPrivateInfo} >Info</button>
                <Gallery pics={user.pictures} />
            </div>
        )
    }
}

export default PublicProfile