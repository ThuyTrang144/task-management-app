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

export function Item (props) {
    const onClick = () => {
        props.handleSelectedItem(props.data.id);

    };
    return (
        <Link to={props.data.link} 
            key={props.data.id} 
            onClick={onClick} 
        >
            <li 
                className='item' 
                style={props.activeId === props.data.id ?  {backgroundColor: '#13C2C2', color: 'white'} : null}
            >
                { props.data.icon ? <FontAwesomeIcon className='item-icon' icon={props.data.icon}/> : null}
                <span className='item-name'>{props.data.name}</span>
            </li>
        </Link>
    );
}