import { CheckOutlined, GlobalOutlined, EditOutlined, MenuOutlined} from '@ant-design/icons';
export const ActionGroup = () => {
    return (
        <div className="group-btn">
            <button className="btn-action mark-done">
                <CheckOutlined />
            </button>
            <button className="btn-action change-privacy">
                <GlobalOutlined />
            </button>
            <button className="btn-action edit-work-item">
                <EditOutlined />
            </button>
            <button className="btn-action menu-action">
                <MenuOutlined />
            </button>
        </div>
    );
};