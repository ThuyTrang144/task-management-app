import './style.scss';

export const Header = (props) => {
    return (
        <div className='setting-header'>
            <p className='title'>{props.title}</p>
        </div>
    );
};