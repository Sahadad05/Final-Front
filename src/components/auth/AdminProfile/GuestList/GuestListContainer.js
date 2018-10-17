import React, {Component} from 'react'
import axios from 'axios'
import GuestListDisplay from "./GuestListDisplay"
import NewGuestContainer from "../NewGuest/NewGuestContainer";
import {sendUsers} from '../../../../services/userService';
import {Icon, Popconfirm, Checkbox, Select} from 'antd'
import styles from '../../AdminProfile/Styles.module.css'

const Option = Select.Option


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}



class GuestListContainer extends Component {
  state = {
    data: [],
    users: "",
    columns: [
      {title: 'Nombre', dataIndex: 'username', key: 'username'},
      {title: 'Email', dataIndex: 'email', key: 'email'},
      {title: 'Asistencia', dataIndex: 'attendant', key: 'attendant', render:()=> (
        <Checkbox 
        onChange={onChange}>
        Checkbox
        </Checkbox>)},

      {title: 'Boletos', dataIndex: 'tickets', key: 'tickets'},
      {title: 'Mesa', dataIndex: 'mesa', key: 'table', render: () => (
        <Select
          showSearch
          style={{ width: 50 }}
          placeholder="Table"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
        </Select>
      )},

      {title: 'Delete', key: 'action', render: (i, obj) => (
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
  
  removeUsers=(_id)=>{    
    axios.post('http://localhost:3000/user/guests/removeUsers',{_id},{
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    }).then(res =>{
      console.log('Eliminado')
      let {data} = this.state
      data = data.filter(d=>d._id!==_id)
      this.setState({data})
    })
    .catch(e=>{
      console.log(e)
    })
  }

  render() {
    const {columns, data} = this.state
    console.log(this.state.data)
    console.log(this.props);

    return (
      <div className={styles.tabla}>
        <NewGuestContainer 
        sendUsers={this.handleSubmit} 
        handleChange={this.handleChange}/>
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