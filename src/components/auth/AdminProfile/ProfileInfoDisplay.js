import React from 'react'
import { Form, DatePicker, TimePicker, Button, Card } from 'antd';
// import styles from '../AdminProfile/Styles.module.css'
const FormItem = Form.Item;

class TimeRelatedForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        
        'time-picker': fieldsValue['time-picker'].format('HH:mm'),
      };
      console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <Card >
      <Form onSubmit={this.handleSubmit}
      style={{marginLeft:'15px', marginRight:'15px', marginTop:'10px'}}>
        <FormItem
          {...formItemLayout}
          label="DatePicker"
        >
          {getFieldDecorator('date-picker', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="TimePicker"
        >
          {getFieldDecorator('time-picker', config)(
            <TimePicker />
          )}
        </FormItem>
        
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      </Card>
    );
  }
}

const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm);

export default WrappedTimeRelatedForm
