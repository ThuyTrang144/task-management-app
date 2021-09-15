import { importanceLevel } from '../constant';

export const useImportanceLevel = () => {
    const findImportanceLevelById = (id) => {
        return importanceLevel.find(element => element.id === id);
    };
    return { findImportanceLevelById };
};