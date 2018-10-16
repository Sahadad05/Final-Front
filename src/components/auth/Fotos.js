import React, {Component}from 'react'
import axios from 'axios'
import toastr from 'toastr'
import logo from '../../images/flores.png'
import {uploadPic, getUserPics} from '../../services/userService'
import Gallery from './Gallery'
// import { Upload, Button, Icon } from 'antd';



class Fotos extends Component{

    state = {
        user:{},
        pics:[],
        photoURL:{}
    }


onChangeFile = (e) => {
        console.log(e.target.files[0])
        const {pics, photoURL} = this.state
        uploadPic(e.target.files[0])
        .then(pic=>{
            console.log(pic)
            pics.push(pic.data)
            this.setState({pics})
        })
        .catch(e=>toastr.error('Error'))
    }

uploadPhoto = () => {
       this.refs.input.click()
   }


getPics = () => {
    getUserPics()
    .then(pics=>{
        this.setState({pics})
    })
    .catch(e=>toastr.error("No se pudo cargar tu imagen"))
}

componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) return this.props.history.push('/login')
    this.setState({user})
    this.getPics()
}

onChange = (info) => {
    console.log(info)
    const {photoURL} = this.state
    this.setState({photoURL: info.file.originFileObj})
}

handlePhoto = () => {
    console.log(this.state.photoURL)
    const url = "http://localhost:3000/"
    const token = localStorage.getItem('token')
    return axios.get(url + 'pictures/own/',{
        headers:{
            "Authorization":token
        }
    })
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(e=>e)
}



render() {
    const {user, pics} = this.state
    return(
        <div>
            <nav> 
                <h1>boda</h1>
            </nav>
            <img style={{borderRadius:'50%'}} src={user.photoURL || logo} width="400" alt="user"/>
            <h1>{user.username}</h1>
            {/* <button onClick={this.getPrivateInfo} >Info</button> */}
            
            <hr/>
            <h1>¡Sube tus fotos!</h1>
            <input accept="image/*" onChange={this.onChangeFile} ref="input" hidden type="file" />
            <br/>
            <img style={{cursor:"pointer"}} width="100" onClick={this.uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" alt='camara'/>
            <Gallery pics={pics} />
        </div>
        )
    }
}

export default Fotos