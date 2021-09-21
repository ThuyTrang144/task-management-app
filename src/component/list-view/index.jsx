import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { DataContext } from '../../context';

export const ListView = ( {data, ItemComponent, activeId} ) => {
    const [ activeItemId, setActiveItemId ] = useState(activeId);
    const context = useContext(DataContext);
    const handleSelection = (id) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                setActiveItemId(id);
            }
        }
        context.handleSelectedItem(id);
    };
    function renderItem() {
        return data.map(item => {
            return <ItemComponent data={item} key={item.id} handleSelectedItem={handleSelection} activeId={activeItemId}/>;
        });
    };
    return renderItem();
};

