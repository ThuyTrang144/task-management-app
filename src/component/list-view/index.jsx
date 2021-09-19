import { useState } from 'react/cjs/react.development';

export const ListView = ( {data, ItemComponent, activeId} ) => {
    const [ activeItemId, setActiveItemId ] = useState(activeId);
    const handleSelectedItem = (id) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                setActiveItemId(id);
            }
        }

    };
    function renderItem() {
        
        return data.map(item => {
            return <ItemComponent data={item} key={item.id} handleSelectedItem={handleSelectedItem} activeId={activeItemId}/>;
        });
    };
    return renderItem();
};

