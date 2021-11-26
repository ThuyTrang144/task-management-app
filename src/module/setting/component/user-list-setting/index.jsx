import { useUserList } from '../../../../general-data-hook/useUserList';
import { Header } from '../setting-header';
import { Table } from 'antd';

export const UserListSetting = () => {
    const { userList } = useUserList();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ];
    return (
        <div>
            <Header title='User List' />
            <Table columns={columns} dataSource={userList} />
        </div>
    );
};