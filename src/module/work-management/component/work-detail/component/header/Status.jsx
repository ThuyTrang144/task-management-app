import { status } from '../../../../../../constant';
import { Select } from 'antd';
import './style.scss';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
const { Option } = Select;

export const Status = (props) => {
    const { changeWorkItemStatus } = useWorkItem();
    const onChange = (option) => {
        changeWorkItemStatus(props.workId, option);
    };
    const renderStatus = () => {
        return status.map(item => (
            <Option key={item.id} id={item.id}value={item.name}>{item.name}</Option>
        ));
    };
    return (
        <Select className="status-selection" value={props.currentStatus.name} onChange={onChange}>
            {renderStatus()}
        </Select>
    );
};