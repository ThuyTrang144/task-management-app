import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function FilterPannel({ title, children }) {
    return (
        <div className="menu-section">
            <div className="menu-title">{title}</div>
            {children}
        </div>                    
    );
}

export function MenuItem ({ children }) {
    return (
        <ul className="menu">
            {children}
        </ul>
    );
}

export function Item ({ data, handleSelectedItem }) {
    const onClick = () => {
        handleSelectedItem(data.id);

    };
    return (
        <Link to={data.link} 
            key={data.id} 
            onClick={onClick} 
        >
            <li 
                className='item' 
                style={data.isActive ?  {backgroundColor: '#13C2C2', color: 'white'} : null}
            >
                { data.icon ? <FontAwesomeIcon className='item-icon' icon={data.icon}/> : null}
                <span className='item-name'>{data.name}</span>
            </li>
        </Link>
    );
}
// <Item 
//     data={settingMenu}
//     style={{backgroundColor: '#13C2C2', color: 'white'}}
//     activeId={activeId}
//     onClick={handleSelectedItem}
//     key={item.id} 
//     id={item.id} 
//     icon={item.icon}
//     name={item.name}
//     link={item.link}
// >
// </Item>;