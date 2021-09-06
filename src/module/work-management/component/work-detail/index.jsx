import React from 'react';
import './styles.scss';
import { Header, TodoList, TagList, Description, ActivityList, Assignment} from './component';
import { findWorkItemById } from '../../../../data';

class WorkDetail extends React.PureComponent {
    render() {
        const { activeId, status, tagList } = this.props;
        const workDetailData = findWorkItemById(activeId);
        console.log('id', activeId);
        console.log('workDetailData', workDetailData.description);
        return (
            <div id="work-detail-board" className="work-detail">
                <Header 
                    workDetailData={workDetailData}
                    status={status}
                    backToBucketBoard={this.props.onClick}
                />
                <div className='detail-view'>
                    <div className='detail-view-left'>
                        <TagList workDetailData={workDetailData} tagList={tagList} tagId={workDetailData.tagId} activeId={activeId}/>
                        <Description description={workDetailData.description} editDescription={this.editDescription} activeId={activeId}/>
                        <TodoList todoList={workDetailData.todoList} activeId={activeId} />
                        <ActivityList activitiesList={workDetailData.activitiesList} />
                    </div>
                    {/* <div className='detail-view-right'>
                        <AssignmentSection owner={this.props.owner} participant={this.props.participant}/>
                        <Attachment attachmentList={this.props.attachmentList}/>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default WorkDetail;