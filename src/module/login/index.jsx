import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.scss';
import { Link } from  'react-router-dom';
import { DataContext } from '../../context';
import { useContext, useState } from 'react/cjs/react.development';

export const LoginPage = () => {
    const context = useContext(DataContext);
    const [ value, setValue ] = useState('');
    const onChange = (e) => {
        const value = e.target.value;
        setValue(value);
    };
    const onSubmit = () => {
        context.onSubmitLogin(value);
    };
    return (
        <div className='login-space' >
            <div>
                <p>Welcome to Task Management</p>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <p>Login</p>
                <Form.Item
                    className='input-item'
                    name="username"
                    rules={[{ equired: true, message: value.length ? 'Incorrect username!' : 'Please input your username!'}]}
                >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="username" 
                        value={value}
                        onChange={onChange}/>
                </Form.Item>
                <Form.Item
                    className='input-item'
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password" />
                </Form.Item>
                <Form.Item style={{marginLeft: '20px'}}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
    
                    <a className="login-form-forgot" href="abc">
                            Forgot password
                    </a>
                </Form.Item>
    
                <Form.Item className='input-item'>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button"
                        onClick={onSubmit}
                    >
                        <Link to='/work-management'>Login</Link> 
                    </Button>
                        Or <a href="abc">register now!</a>
                </Form.Item>
            </Form>
        </div>
       
    );
};