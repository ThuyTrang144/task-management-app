import { Input, Button } from 'antd';
import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../../context';
import { useUserList } from '../../../../general-data-hook/useUserList';
import { Header } from '../setting-header';
import './style.scss';

export const UserInfo = () => {
    const context = useContext(DataContext);
    const { userList } = useUserList();
    const user = context.state.uer !== undefined ? context.state.user : userList[0];
    const firstName = user.name;
    const username = user.username;
    const email = user.email;
    const avatar = user.avatar;
    return (
        <div>
            <Header title='Profile' />
            <div className='setting-info'>
                <div className='info-item'>
                    <p>First Name</p>
                    <Input value={firstName}></Input>
                </div>
                <div className='info-item'>
                    <p>Last Name</p>
                    <Input value=''></Input>
                </div>
                <div className='info-item'>
                    <p>username</p>
                    <Input value={username}></Input>
                </div>
                <div className='info-item'>
                    <p>Email</p>
                    <Input value={email}></Input>
                </div>
                <div className='info-item'>
                    <p>Avatar</p>
                    <img alt='avatar' src={avatar}/>
                    <button>Change</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className='footer'>
                <Button className='footer-btn' type="primary">Save</Button>
                <Button className='footer-btn cancel-btn' >Cancel</Button>
            </div>
        </div>
       
    );
};