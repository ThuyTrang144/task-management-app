import { importanceLevel } from '../constant';

export const useImportanceLevel = () => {
    const findImportanceLevelById = (id) => {
        return importanceLevel.find(element => element.id === id);
    };
    const findImportanceLevelByName = (name) => {
        return importanceLevel.find(element => element.name === name);
    };
    return { findImportanceLevelById, findImportanceLevelByName };
};