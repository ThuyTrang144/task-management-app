import './style.scss';

export const ChannelItem = (props) => {
    var backgroundColor;
    if (props.name === 'Public') {
        backgroundColor = '#43A047';
    } else if (props.name === 'Personal') {
        backgroundColor = '#13C2C2';
    } else if (props.name === 'Learning') {
        backgroundColor = '#F8877F';
    }
    return (
        <div className='channel-item' style={{backgroundColor: backgroundColor}}>
            <p>{props.name}</p>
            <div>
                <p>100 Work Items</p>
                <p>10 users</p>
            </div>
        </div>
    );
};