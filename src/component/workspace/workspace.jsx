import React from 'react';
import SideBar from './sideBar/sideBar';
import { FilePdfOutlined, FileWordOutlined, FileImageOutlined } from '@ant-design/icons';
import './style.scss'
import BucketList from './workBoard/bucketList';
import WorkDetail from './workDetail/workDetail';
import WorkStream from './workStream/workStream';

class WorkSpace  extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = this.props.DATA
    }
    // viewWorkDetailOfWorkStream = (keyIndex) => {
    // this.state.workItemList.map((item, index) => {
    //     if (keyIndex === index) {
    //         this.setState({ workDetailHeaderTitle: item.name})
    //     }
    // })
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
            <div className='workspace'>
                <SideBar 
                    workItemMenu={this.state.workItemMenu} 
                    activityMenu={this.state.activityMenu} 
                    folderMenu={this.state.bucketList}
                    assignee={this.state.userList}
                    tagList={this.state.tagList}
                    status={this.state.status}
                    importanceLevel={this.state.importanceLevel}
                    />
                <WorkStream 
                    workItemList={this.state.workItemList}
                    // viewWorkDetailOfWorkStream={this.viewWorkDetailOfWorkStream}
                    // isViewDetail={this.state.isViewDetail}
                    // setSelectedItem={this.state.setSelectedItem}
                    // isWorkStream={this.state.isWorkStream}
                />
                    {/* {this.state.isViewDetail ? <BucketList 
                        viewWorkDetailOfBucket={this.viewWorkDetailOfBucket} 
                        bucketList={this.state.bucketList}
                        bucketItemList={this.state.bucketItemList}
                        />: 
                        <WorkDetail  
                        attachmentList={this.state.attachmentList}
                        owner={this.state.owner}
                        participant={this.state.participant}
                        activitiesList={this.state.activitiesList}
                        todoList={this.state.todoList}
                        workDetailHeaderTitle={this.state.workDetailHeaderTitle}
                        backToBucketBoard={this.backToBucketBoard} /> 
                        
                    } */}
                    {/* {this.state.isViewDetail ? 
                        <WorkDetail  
                            attachmentList={this.state.attachmentList}
                            owner={this.state.owner}
                            participant={this.state.participant}
                            activitiesList={this.state.activitiesList}
                            todoList={this.state.todoList}
                            workDetailHeaderTitle={this.state.workDetailHeaderTitle}
                            backToBucketBoard={this.backToBucketBoard} /> :
                        <BucketList 
                            viewWorkDetailOfBucket={this.viewWorkDetailOfBucket} 
                            bucketList={this.state.bucketList}
                            bucketItemList={this.state.bucketItemList}
                            isWorkStream={this.state.isWorkStream}
                            />
                    } */}
            </div>
         );
    }
}
 
export default WorkSpace ;