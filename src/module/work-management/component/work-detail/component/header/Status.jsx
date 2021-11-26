import { Select } from 'antd';
import './style.scss';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { useStatus } from '../../../../../../general-data-hook/useStatus';
const { Option } = Select;

export const Status = (props) => {
    const { statusList } = useStatus();
    const { changeWorkItemStatus } = useWorkItem();
    const onChange = (option) => {
        changeWorkItemStatus(props.workId, option);
    };
    const renderStatus = () => {
        return statusList.map(item => (
            <Option key={item._id} id={item._id} value={item.label}>{item.label}</Option>
        ));
    };
    return (
        <Select className="status-selection" value={props.currentStatus.label} onChange={onChange}>
            {renderStatus()}
        </Select>
    );
};