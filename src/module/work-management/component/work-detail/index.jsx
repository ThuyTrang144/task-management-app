import React from 'react';
import './styles.scss';
import { Header, TodoList, TagList, Description, ActivityList, Assignment, Attachment} from './component';
import { findWorkItemById } from '../../../../data';

class WorkDetail extends React.PureComponent {
    render() {
        const { activeId, status, tagList } = this.props;
        const workDetailData = findWorkItemById(activeId);
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
                    <div className='detail-view-right'>
                        <Assignment ownerId={workDetailData.ownerId} participantId={workDetailData.participantId}/>
                        <Attachment attachmentList={workDetailData.attachmentList}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkDetail;