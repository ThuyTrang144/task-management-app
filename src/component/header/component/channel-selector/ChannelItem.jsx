import { useUserList } from '../../../../general-data-hook/useUserList';
import './style.scss';

export const ChannelItem = (props) => {
    const { userList } = useUserList();
    var backgroundColor;
    if (props.name === 'Public') {
        backgroundColor = '#43A047';
    } else if (props.name === 'Personal') {
        backgroundColor = '#13C2C2';
    } else if (props.name === 'Learning') {
        backgroundColor = '#F8877F';
    } else {
        backgroundColor = 'grey';
    }
    const handleChannel = () => {
        props.changeChannel(props.id);
    };
    return (
        <div className='channel-item' style={{backgroundColor: backgroundColor}} onClick={handleChannel}>
            <p>{props.name}{props.activeChannelId === props.id ? <span style={{fontSize: '18px'}}> (Active)</span> : null}</p>
            <div>
                <p>{props.totalWorkItem} Work Items</p>
                <p>{userList.length} users</p>
            </div>
        </div>
    );
};