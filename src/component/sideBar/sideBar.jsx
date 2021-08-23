import React from 'react';
import './styles.scss'
import WorkItemMenu from './workItemMenu';
class SideBar extends React.PureComponent {
    render() { 
        return ( 
            <div className="sidebar">
                <WorkItemMenu />
            </div>
         );
    }
}
 
export default SideBar;