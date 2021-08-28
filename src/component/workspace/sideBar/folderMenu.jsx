import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class FolderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folderMenu: this.props.folderMenu
        };
    }
    renderMenu() {
        return this.state.folderMenu.map(item =>
            <Menu.Item className='item' key={item}>{item}</Menu.Item>
        );
    }
    render() {
        return (
            <div className='menu-section' >
                <Menu
                    mode="inline"
                >
                    <SubMenu key="SubMenu" title={<p className='folder-title'>FOlDERS</p>}>
                        {this.renderMenu()}
                    </SubMenu>
                </Menu>
            </div>

        );
    }
}

export default FolderMenu;