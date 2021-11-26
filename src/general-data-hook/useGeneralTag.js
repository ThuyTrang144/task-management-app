import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';

export const useGeneralTag = () => {
    const context = useContext(DataContext);
    const tagList = context.state.tagList;
    const findTagsById = (id) => {
        return tagList.find(element => element.id === id);
    };
    const findTagsByName = (name) => {
        return tagList.find(element => element.name === name);
    };
    return {
        tagList,
        findTagsById,
        addTag: context.addTag,
        findTagsByName
    };
};