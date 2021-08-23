import React from 'react';
import ActivityMenu from './activityMenu';
import './styles.scss'
import WorkItemMenu from './workItemMenu';
import FolderMenu from './folderMenu';
import Filter from './filter';
class SideBar extends React.PureComponent {
    render() { 
        return ( 
            <div className="sidebar">
                <WorkItemMenu />
                <ActivityMenu />
                <FolderMenu />
                <Filter />
            </div>
         );
    }
}
 
export default SideBar;