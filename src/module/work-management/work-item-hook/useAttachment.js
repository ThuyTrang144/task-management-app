import { useWorkItem } from './useWorkItem';

const useAttachment = () => {
    const { findWorkItemById } = useWorkItem();
    const deleteAttachment = (workId, attachmentId) => {
        const workItem = findWorkItemById(workId);
        const attachmentIndex = workItem.attachmentList.findIndex(item => item.id === attachmentId);
        workItem.attachmentList.splice(attachmentIndex, 1);
        return [...workItem.attachmentList];
    };
    return { deleteAttachment };
};
export { useAttachment };