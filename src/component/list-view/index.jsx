import { useContext, useState } from 'react/cjs/react.development';
import { DataContext } from '../../context';

export const ListView = ( {data, ItemComponent, activeMenuItem }) => {
    const [ menuItem, setMenuItem ] = useState(activeMenuItem);
    const context = useContext(DataContext);
    const handleSelection = (name) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                setMenuItem(name);
            }
        }
        context.handleSelectedItem(name);
    };
    function renderItem() {
        return data.map(item => {
            return <ItemComponent data={item} key={item._id} handleSelectedItem={handleSelection} activeMenuItem={menuItem}/>;
        });
    };
    return renderItem();
};

