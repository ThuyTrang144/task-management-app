import { WorkDetailContext } from '../../context';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import { useImportanceLevel } from '../../../../../../general-data-hook/useImportanceLevel';

export const ImportanceLevel = () => {
    const { findImportanceLevelById } = useImportanceLevel();
    return (
        <WorkDetailContext.Consumer>
            {value => { 
                const importanceLevel = findImportanceLevelById(value.workDetailData.importanceLevelId);
                return <div className="importance-level">
                    <ExclamationCircleOutlined />
                    <span>Importance</span><br></br>
                    <span className="level">{importanceLevel.name}</span>
                </div>;}}
        </WorkDetailContext.Consumer>  
    );
};