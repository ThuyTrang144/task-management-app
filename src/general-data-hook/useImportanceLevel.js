import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { importanceLevelUrl } from '../constant';

export const useImportanceLevel = () => {
    const [ importanceLevelList, setImportanceLevelList ] = useState([]);

    const getImportanceLevelList = async () => {
        try {
            const res = await fetch(importanceLevelUrl);
            return res.json();
        } catch (err) {
            console.log('importance level', err);
        }
    };

    useEffect(() => {
        (async () => {
            const data = await getImportanceLevelList();
            setImportanceLevelList(data.results);
        })();
    }, []);

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
    return { findImportanceLevelById, findImportanceLevelByName };
};