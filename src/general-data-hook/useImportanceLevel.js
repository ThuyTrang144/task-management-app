import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { importanceLevelUrl } from '../constant';
import { getImportanceLevel } from '../slice/importanceLevelSlice';

export const useImportanceLevel = () => {
    const dispatch = useDispatch();
    const importanceLevelList = useSelector(state => state.importanceLevel.importanceLevelList);

    const getImportanceLevelList = async () => {
        try {
            const { data } = await axios.get(importanceLevelUrl);
            return data.results;
        } catch (err) {
            console.log('importance level', err);
        }
    };

    useEffect(() => {
        (async () => {
            const data = await getImportanceLevelList();
            dispatch(getImportanceLevel(data));
        })();
    }, [dispatch]);

    const findImportanceLevelById = (id) => {
        const level =  importanceLevelList.find(element => element._id === id);
        if (level === undefined) {
            return { label: 'Unknow'};
        } else {
            return level;
        }
    };

    const findImportanceLevelByName = (name) => {
        const level = importanceLevelList.find(element => element.label === name);
        if (level === undefined) {
            return { label: 'Unknow'};
        } else {
            return level;
        }
    };
    return { importanceLevelList, findImportanceLevelById, findImportanceLevelByName };
};