import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class FolderMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItem: [
        'Important Tasks',
        'In Progress Tasks',
        'Daily Checklist'
      ]
    }
  }
  renderMenu() {
    const menu = this.state.menuItem.map((item, index) => 
      <Menu.Item className='item' key={index}>{item}</Menu.Item>
    )
    return menu;
  }
  render() {
    return (
      <div className='menu-section' >
        <Menu 
        mode="inline"
        >          
        <SubMenu title={<p className='folder-title'>FOlDERS</p>}>
          {this.renderMenu()}
          </SubMenu>
        </Menu>
      </div>
      
    );
  }
}

export default FolderMenu