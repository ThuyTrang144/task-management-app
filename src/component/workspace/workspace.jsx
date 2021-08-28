import React from 'react';
import SideBar from './sideBar/sideBar';
import './style.scss'
import BucketList from './workBoard/bucketList';
import WorkDetail from './workDetail/workDetail';
import WorkStream from './workStream/workStream';
import { FilePdfOutlined, FileWordOutlined, FileImageOutlined } from '@ant-design/icons';
import {faTasks, faUser, faUsers, faArchive, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class WorkSpace  extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            workItemMenu: [
                {icon: faTasks, name:"Work Stream"}, 
                {icon: faUser, name: "Owned Works"}, 
                {icon: faUsers, name: "Participated Works"}, 
                {icon: faArchive, name: "Archived Works"}
            ],
            activityMenu: [
                {icon: faArrowRight, name:"Incoming"}, 
                {icon: faArrowLeft, name: "Outgoing"} 
            ],
            folderMenu: [
                'Important Tasks',
                'In Progress Tasks',
                'Daily Checklist'
              ],
            assignee: [
                'Anros Nguyen',
                'Trang Nguyen',
                'Thien Huynh'
            ],
            tag: [
                '#english',
                '#coding',
                '#reading',
                '#cooking'
            ],
            status: [
                'New',
                'In Progress',
                'Done'
            ],
            importanceLevel: [
                'Urgent',
                'High', 
                'Normal', 
                'Low',
            ],
            workItemList: [
                {name: 'Learning English 1', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 2', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 3', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 4', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 5', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 6', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 7', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
                {name: 'Learning English 8', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left', isSelected: false},
            ],
            bucketItemList: [
                {name: 'Learn React Js 1', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 2', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 3', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 4', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 5', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 6', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 7', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learn React Js 8', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
            ],
            bucketList: [
                { name: 'Important Tasks 1' },
                { name: 'Important Tasks 2'},
                { name: 'Important Tasks 3'},
                { name: 'Important Tasks 4'},
                { name: 'Important Tasks 5'},
            ],
            isViewDetail: false,
            workDetailHeaderTitle: 'Learning English 1',
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            owner: [
                {name: 'Trang Nguyen', avatar: 'https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg'}
            ], 
            participant: [
                {name: 'Thien Huynh', avatar: 'https://vcdn-vnexpress.vnecdn.net/2020/09/23/01-4451-1600828895.jpg'},
                {name: 'Mai Thao', avatar: 'https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-Anuko-noi-tieng-tren-mang-xa-hoi.jpg'},
                {name: 'Anros Nguyen', avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/01/cho-phoc-soc-long-mau-nau-cute-de-thuong.jpg'},
                {name: 'Thanh Van', avatar: 'https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg'},
                {name: 'Diem Phuoc', avatar: 'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-ch%C3%BA-ch%C3%B3-d%E1%BB%85-th%C6%B0%C6%A1bg.jpg'},
            ],
            attachmentList: [
                {name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ]
        }
    }
    viewWorkDetailOfWorkStream = (keyIndex) => {
        this.state.workItemList.map((item, index) => {
            if (keyIndex === index) {
                this.setState({ workDetailHeaderTitle: item.name})
            }
        })
        this.setState( { isViewDetail: true })
    }
    viewWorkDetailOfBucket = (keyIndex) => {
        this.state.bucketItemList.map((item, index) => {
            if (keyIndex === index) {
                this.setState({ workDetailHeaderTitle: item.name})
            }
        console.log('title', this.state.workDetailHeaderTitle)
        })
        this.setState({ isViewDetail: true })
    }
    backToBucketBoard = () => {
        this.setState({ isViewDetail: false})
    }
    render() { 
        return ( 
            <div className='workspace'>
                <SideBar 
                    workItemMenu={this.state.workItemMenu} 
                    activityMenu={this.state.activityMenu} 
                    folderMenu={this.state.folderMenu}
                    assignee={this.state.assignee}
                    tag={this.state.tag}
                    status={this.state.status}
                    importanceLevel={this.state.importanceLevel}
                    />
                <WorkStream 
                    workItemList={this.state.workItemList}
                    viewWorkDetailOfWorkStream={this.viewWorkDetailOfWorkStream}
                    isViewDetail={this.state.isViewDetail}
                    />
                    {this.state.isViewDetail ? <BucketList 
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
                        
                    }
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
                            />
                    } */}
            </div>
         );
    }
}
 
export default WorkSpace ;