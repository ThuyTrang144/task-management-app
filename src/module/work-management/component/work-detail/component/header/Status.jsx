import { status } from '../../../../../../constant';
import { Select } from 'antd';
import { WorkDetailContext } from '../../context';
import './style.scss';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { useContext } from 'react/cjs/react.development';
import { useStatus } from '../../../../../../general-data-hook/useStatus';
const { Option } = Select;

export const Status = (props) => {
    const { changeWorkItemStatus } = useWorkItem();
    const workContext = useContext(WorkDetailContext);
    const { findStatusById } = useStatus();
    const currentStatus = findStatusById(workContext.workDetailData.statusId);
    const onChange = (option) => {
        changeWorkItemStatus(props.workId, option);
    };
    const renderStatus = () => {
        return status.map(item => (
            <Option key={item.id} id={item.id}value={item.name}>{item.name}</Option>
        ));
    };
    return (
        <Select className="status-selection" value={currentStatus.name} onChange={onChange}>
            {renderStatus()}
        </Select>
    );
};