import React, {Component} from 'react'
import axios from 'axios'
import GuestListDisplay from "./GuestListDisplay"
import NewGuestContainer from "../NewGuest/NewGuestContainer";
import {sendUsers} from '../../../../services/userService';
import {Icon, Popconfirm} from 'antd'

class GuestListContainer extends Component {
  state = {
    data: [],
    users: "",
    columns: [
      {title: 'Nombre', dataIndex: 'username', key: 'username'},
      {title: 'Email', dataIndex: 'email', key: 'email'},
      {title: 'Asistencia', dataIndex: 'attendant', key: 'attendant'},
      {title: 'Boletos', dataIndex: 'tickets', key: 'tickets'},
      {title: 'Mesa', dataIndex: 'table', key: 'table'},
      { title: 'Delete', key: 'action', render: (i, obj) => (
        <Popconfirm 
        title="Are you sure？" 
        icon={<Icon type="question-circle-o" 
        style={{ color: 'red' }} />}>
       <button onClick={()=>this.removeUsers(obj._id)}>Delete</button>
       </Popconfirm>
      )}      
]
  }
  
  
  componentWillMount() {
    axios.get('http://localhost:3000/auth/user/guests', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res.data)
      this.setState({data: res.data.users})
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let {users} = this.state;
    users = e.target.value;
    this.setState({users})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.users);
    sendUsers(this.state.users)
  }
  
  render() {
    const {columns, data} = this.state
    console.log(this.state.data)
    console.log(this.props);

    return (
      <div>
        
        <NewGuestContainer sendUsers={this.handleSubmit} handleChange={this.handleChange}/>
        <br/>
        <hr/>
        <GuestListDisplay
          columns={columns}
          data={data}
        />
        
        
        
      </div>
    )
  }
}


export default GuestListContainer