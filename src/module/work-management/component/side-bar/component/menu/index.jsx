import React from 'react';
import { faArrowRight, faArrowLeft, faTasks, faUser, faUsers, faArchive } from '@fortawesome/free-solid-svg-icons';
import { FilterPannel, Item, MenuItem } from '../filter-panel';
import { ExclamationCircleOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import './style.scss';

const activityMenu = [
    { icon: faArrowRight, name:'Incoming' },
    { icon: faArrowLeft, name: 'Outgoing' } 
];
const workItemMenu = [
    { icon: faTasks, name:'Work Stream' }, 
    { icon: faUser, name: 'Owned Works' }, 
    { icon: faUsers, name: 'Participated Works' },
    { icon: faArchive, name: 'Archived Works' }
];
class Menu extends React.PureComponent {
    state = {
        isOpen: false
    }
    renderActivityItem() {
        return activityMenu.map(item =>
            <Item key={item.name} icon={item.icon} name={item.name}></Item>
        );
    }
    renderWorkItem() {
        return workItemMenu.map(item =>
            <Item key={item.name} icon={item.icon} name={item.name}></Item>
        );
    }
    renderFolderTitle = () =>  {
        return(
            <div>
                <span>FOLDERS</span>
                <ExclamationCircleOutlined />
                {this.state.isOpen ? 
                    <UpOutlined className='folder-icon' onClick={this.viewFolder}/> : 
                    <DownOutlined className='folder-icon' onClick={this.viewFolder}/>
                }
            </div>
        );
    }
    renderFolderMenu() {
        return this.props.folderMenu.map(item => 
            <Item key={item.id} name={item.name} icon={null}></Item>
        );
    }
    viewFolder = () => {;
        if (this.state.isOpen) {
            this.setState({ isOpen: false });
        } else {
            this.setState({ isOpen: true });
        }
    }
    render() {
        return (
            <div>
                <FilterPannel title="WORK ITEM">
                    <MenuItem>
                        {this.renderWorkItem()}
                    </MenuItem>
                </FilterPannel>
                <FilterPannel title="ACTIVITIES">
                    <MenuItem>
                        {this.renderActivityItem()}
                    </MenuItem>
                </FilterPannel>
                <FilterPannel title={this.renderFolderTitle()}>
                    {this.state.isOpen ? <MenuItem>{this.renderFolderMenu()}</MenuItem> : <MenuItem></MenuItem>}
                </FilterPannel>
            </div>
            
        );
    }
}

export default Menu;