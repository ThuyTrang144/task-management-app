import React from 'react';
import { SideBar, WorkStream, WorkDetail, BucketBoard } from './component';
// import { FilePdfOutlined, FileWordOutlined, FileImageOutlined } from '@ant-design/icons';
import './style.scss';

class WorkManagement  extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: props.DATA,
            activeId: undefined,
        };
    }
    viewWorkDetail = (id) => {
        this.setState({ isViewDetail: true });
        this.setState({ activeId: id });
    }
    // function deleteTodo(workItemId, todoId) {
    //     console.log('work item id', workItemId, todoId);
    //     const workItem = findWorkItemById(workItemId);
    //     const todoIndex = workItem.todoList.findIndex(item => item.id === todoId);
    //     workItem.todoList.splice(todoIndex, 1);
    //     console.log('todoList', workItem.todoList);
    //     return DATA;
    // this.setState( { isViewDetail: true })
    // this.setState({ isWorkStream: true })
    // }
    // viewWorkDetailOfBucket = (keyIndex) => {
    //     this.state.bucketItemList.map((item, index) => {
    //         if (keyIndex === index) {
    //             this.setState({ workDetailHeaderTitle: item.name})
    //         }
    //     })
    //     this.setState({ isViewDetail: true })
    //     this.setState({ isWorkStream: false})
    // }
    // backToBucketBoard = () => {
    //     this.setState({ isViewDetail: false})
    // }
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
                    workItemList={this.state.data.workItemList}
                    viewWorkDetail={this.viewWorkDetail}
                />       
                {this.state.isViewDetail ? 
                    <WorkDetail  
                        status={this.state.data.status}
                        tagList={this.state.data.tagList}
                        activeId={this.state.activeId}

                    /> :
                    <BucketBoard
                        bucketList={this.state.data.bucketList}
                        workItemList={this.state.data.workItemList}
                    />
                }
            </div>
        );
    }
}

export default WorkManagement ;