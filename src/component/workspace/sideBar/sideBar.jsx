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
                <WorkItemMenu workItemMenu={this.props.workItemMenu}/>
                <ActivityMenu activityMenu={this.props.activityMenu}/>
                <FolderMenu folderMenu={this.props.folderMenu}/>
                <Filter 
                    assignee={this.props.assignee} 
                    tagList={this.props.tagList} 
                    status={this.props.status}
                    importanceLevel={this.props.importanceLevel}/>
            </div>
         );
    }
}
 
export default SideBar;