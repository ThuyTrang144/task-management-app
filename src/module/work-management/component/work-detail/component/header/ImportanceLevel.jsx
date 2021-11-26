import { WorkDetailContext } from '../../context';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import { useImportanceLevel } from '../../../../../../general-data-hook/useImportanceLevel';

export const ImportanceLevel = () => {
    const { findImportanceLevelById } = useImportanceLevel();
    return (
        <WorkDetailContext.Consumer>
            {value => { 
                const importanceLevel = findImportanceLevelById(value.workDetailData.important_level_id);
                return <div className="importance-level">
                    <ExclamationCircleOutlined />
                    <span>Importance</span><br></br>
                    <span className="level">{importanceLevel.label}</span>
                </div>;}}
        </WorkDetailContext.Consumer>  
    );
};