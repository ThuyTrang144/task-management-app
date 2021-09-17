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
    return (
        <Link to={props.link} 
            onClick={() => props.onClick(props.id)} >
            <li 
                className='item' key={props.id} 
                style={props.activeId === props.id ? props.style : null}
            >
                { props.icon ? <FontAwesomeIcon className='item-icon' icon={props.icon}/> : null}
                <span className='item-name'>{props.name}</span>
            </li>
        </Link>
    );
}