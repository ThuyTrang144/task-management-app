import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../context';
import { useWorkItem } from './useWorkItem';

const useAttachment = () => {
    const context = useContext(DataContext);
    const { findWorkItemById, setWorkItemList, workItemList } = useWorkItem();
    const workItem = findWorkItemById(context.state.activeId);
    const deleteAttachment = (attachmentId) => {
        const attachmentIndex = workItem.attachmentList.findIndex(item => item.id === attachmentId);
        workItem.attachmentList.splice(attachmentIndex, 1);
        setWorkItemList([...workItemList]);
    };
    return { 
        attachmentList: workItem.attachmentList,
        deleteAttachment
    };
};
export { useAttachment };