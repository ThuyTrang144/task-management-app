import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';
import { useWorkItem } from '../module/work-management/work-item-hook/useWorkItem';

const useTag = () => {
    const dataContext = useContext(DataContext);
    const tagList = dataContext.tagList;
    const { findWorkItemById } = useWorkItem();
    const findTagsById = (id) => {
        return tagList.find(element => element.id === id);
    };
    const addTag = (workId, text) => {
        tagList.push({ id: Math.random().toString().substring(2), name: text});
        const workItem = findWorkItemById(workId);
        workItem.tagId.push(tagList[tagList.length-1].id);
    };
    return { tagList, addTag, findTagsById };
};
export { useTag };