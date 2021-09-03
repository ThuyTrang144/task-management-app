import React from 'react';
import { deleteBucket, revertWorkItemToWorkStream } from '../../data';
import { SideBar, WorkStream, WorkDetail, BucketBoard } from './component';
// import { FilePdfOutlined, FileWordOutlined, FileImageOutlined } from '@ant-design/icons';
import './style.scss';

class WorkManagement  extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: props.DATA,
            workItemList: props.DATA.workItemList,
            bucketList: props.DATA.bucketList,
            activeId: undefined,
        };
    }
    viewWorkDetail = (id) => {
        this.setState({ isViewDetail: true });
        this.setState({ activeId: id });
    }
    deleteBucket = (id) => {
        const bucketList = deleteBucket(id);
        this.setState({ bucketList});
        const workItemList = revertWorkItemToWorkStream(id);
        this.setState({ workItemList});
    }
    render() { 
        return ( 
            <div className='work-management'>
                <SideBar 
                    folderMenu={this.state.data.bucketList}
                    assignee={this.state.data.userList}
                    tagList={this.state.data.tagList}
                    status={this.state.data.status}
                    importanceLevel={this.state.data.importanceLevel}
                />
                <WorkStream
                    workItemList={this.state.workItemList}
                    viewWorkDetail={this.viewWorkDetail}
                />       
                {this.state.isViewDetail ? 
                    <WorkDetail  
                        status={this.state.data.status}
                        tagList={this.state.data.tagList}
                        activeId={this.state.activeId}

                    /> :
                    <BucketBoard
                        bucketList={this.state.bucketList}
                        workItemList={this.state.workItemList}
                        deleteBucket={this.deleteBucket}
                    />
                }
            </div>
        );
    }
}

export default WorkManagement ;