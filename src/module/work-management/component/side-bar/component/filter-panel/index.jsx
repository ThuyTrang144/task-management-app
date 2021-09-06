import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export function Item ({ name, icon }) {
    return (
        <li className='item' key={name}>
            { icon ? <FontAwesomeIcon className='item-icon' icon={icon}/> : null}
            <span className='item-name'>{name}</span>
        </li>
    );
}