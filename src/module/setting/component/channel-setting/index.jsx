import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../setting-header';
import { useChannelList } from '../../../../general-data-hook/useChannelList';

export const ChannelSetting = () => {
    const { channelList } = useChannelList();
    const columns = [
        {
            title: 'Channel Name',
            dataIndex: 'name',
            key: 'channelName',
            render: text => <Link to='/work-management'>{text}</Link>,
        },
        {
            title: 'Work Items',
            dataIndex: 'workItem',
            key: 'workItem',
        },
        {
            title: 'Users',
            dataIndex: 'users',
            key: 'users',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ];
    return (
        <div>
            <Header title='Channel List' />
            <Table columns={columns} dataSource={channelList} />
        </div>
    );
};