import React, {Component} from 'react'
import { Form, Input, Checkbox, Button } from 'antd';
import axios from 'axios'
import '../../home.css';


class Signup extends Component{
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    user:{},
    loading: false
  };

  onChange = (e) =>{
    const field = e.target.name
    const value = e.target.value
    const {user}= this.state
    user[field]=value
    this.setState({user})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        const {user} = this.state
        axios.post('http://localhost:3000/auth/signup', user)
        .then(user=>{
        console.log(user)
        
        })
      }
    });
  }
  
  handleConfirmBlur = (e) => {
    const value = e.target.value;
     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
     }
  
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Las contraseñas no coinciden');
    } else {
      callback();
    }
  }
  
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
      callback();
  }
  
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
      const { getFieldDecorator, loading } = this.props.form;
      // const { autoCompleteResult } = this.state;
    
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

  return (
    <div className="home-background">

    <Form onSubmit={this.handleSubmit} className='infoSig'>
        <h1>Regístrate</h1>
        
    <Form.Item {...formItemLayout} label="Nombre">
      {getFieldDecorator('username', {
          rules: [{
          required: true, message: 'Por favor escribe tu nombre',
          }],
          })(
      <Input
      name= 'username'
      type= 'text'
      onChange={this.onChange} 
      />
        )}
      </Form.Item>


    <Form.Item {...formItemLayout} label="E-mail">
      {getFieldDecorator('email', {
          rules: [{
          type: 'email', message: 'No es un E-mail válido',
          }, {
          required: true, message: 'Por favor escribe un E-mail',
          }],
          })(
      <Input
      name= 'email'
      onChange={this.onChange} 
      />
        )}
      </Form.Item>

      <Form.Item {...formItemLayout} label="Contraseña">
      {getFieldDecorator('password', {
          rules     : [{
          required  : true, message: 'Escribe tu contraseña',
          }, {
          validator : this.validateToNextPassword,
          }],
          })(
      <Input 
      type="password"
      name="password"
      onChange={this.onChange} />
        )}
      </Form.Item>

      <Form.Item {...formItemLayout} label="Confirma tu contraseña">
      {getFieldDecorator('confirm', {
          rules     : [{
          required  : true, message: 'Confirma tu contraseña',
          }, {
          validator : this.compareToFirstPassword,
          }],
          })(
      <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
      </Form.Item>
      
        <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
            valuePropName: 'checked',
        })
        (
        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
        )}
        </Form.Item> 

        <Form.Item {...tailFormItemLayout}>
          <Button loading={loading} type="primary" htmlType="submit">Registrar</Button>
            </Form.Item>
          </Form>
          </div>
        );
      }
    } 

const Formu = Form.create()(Signup)

export default Formu
