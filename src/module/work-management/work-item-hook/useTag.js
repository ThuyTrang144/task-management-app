import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../context';
import { useWorkItem } from './useWorkItem';

const useTag = () => {
    const context = useContext(DataContext);
    const { findWorkItemById, setWorkItemList, workItemList } = useWorkItem();
    const workItem = findWorkItemById(context.state.activeId);
    const tagList = context.state.tagList;
    const addTag = (text) => {
        context.addTag(text);
        workItem.tagId.push(tagList[tagList.length-1].id);
        setWorkItemList([...workItemList]);
    };
    return {
        tagId: workItem.tagId,
        addTag
    };
};
export { useTag };