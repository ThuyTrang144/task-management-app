import { useState } from 'react/cjs/react.development';

export const ListView = ( {data, ItemComponent} ) => {
    const [ currentData, setCurrentData ] = useState(data);
    const handleSelectedItem = (id) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].isActive = true;
                setCurrentData([...data]);
            } else {
                data[i].isActive = false;
                setCurrentData([...data]);
            }
        }

    };
    function renderItem() {
        
        return currentData.map(item => {
            return <ItemComponent data={item} key={item.id} handleSelectedItem={handleSelectedItem} />;
        });
    };
    return renderItem();
};

