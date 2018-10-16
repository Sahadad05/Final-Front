import axios from 'axios'

const url = "http://localhost:3000/auth/"


export const uploadPic = (file) => {
    const form = new FormData()
    form.append('file', file)
    const token = localStorage.getItem('token')
    return axios.post(url + 'pictures/', form, {
        headers:{
            "Authorization":token
        }
    })
    .then(picture=>picture)
    .catch(e=>e)
}

export const getUserData = (id) => {
    return axios.get(url + 'users/' + id)
    .then(res=>{
        return res.data
    })
    .catch(e=>e)
}

export const getUserPics = () => {
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

export const sendUsers = (users) => {
    const token = localStorage.getItem('token');
    axios.post("http://localhost:3000/auth/user/guests", {users},{
        headers:{
            "Authorization":token
        }
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.error("valio chosto")
    })
}