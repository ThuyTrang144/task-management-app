import { FilePdfOutlined, FileWordOutlined, FileImageOutlined } from '@ant-design/icons';
import {faTasks, faUser, faUsers, faArchive, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const DATA = {
    channelList: [
        { id: 1, name: 'Personal' },
        { id: 2, name: 'Public' },
        { id: 3, name: 'Learning' }
    ],
    bucketList: [
        { id: 1, name: 'Important Tasks 1' },
        { id: 2, name: 'Important Tasks 2' },
        { id: 3, name: 'Important Tasks 3' },
        { id: 4, name: 'Important Tasks 4' },
        { id: 5, name: 'Important Tasks 5' },
    ],
    tagList: [
        { id: 1, name: '#english' },  
        { id: 2, name: '#coding' },
        { id: 3, name: '#reading' },
        { id: 4, name: '#cooking' }
    ],
    status: [
        { id: 1, name: 'New' },
        { id: 2, name: 'In Progress' },
        { id: 3, name: 'Done' }
    ],
    importanceLevel: [
        { id: 1, name: 'Urgent' },
        { id: 2, name: 'High' },
        { id: 3, name: 'High' },
        { id: 4, name: 'Low' },
    ],
    userList: [
        { id: 1, name: 'Thien Huynh', avatar: 'https://vcdn-vnexpress.vnecdn.net/2020/09/23/01-4451-1600828895.jpg' },
        { id: 2, name: 'Mai Thao', avatar: 'https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-Anuko-noi-tieng-tren-mang-xa-hoi.jpg' },
        { id: 3, name: 'Anros Nguyen', avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/01/cho-phoc-soc-long-mau-nau-cute-de-thuong.jpg' },
        { id: 4, name: 'Thanh Van', avatar: 'https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg' },
        { id: 5, name: 'Diem Phuoc', avatar: 'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-ch%C3%BA-ch%C3%B3-d%E1%BB%85-th%C6%B0%C6%A1bg.jpg' },
    ], 
    workItemList: [
        {
            id: 1,
            name: 'Learning English 1', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: null,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 2,
            name: 'Learning English 2', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2],
            ownerId: 3,
            participantId: [1, 2, 3], 
            createdDate: '15 mins ago', 
            dueDate: '2 day left', 
            statusId: 1, 
            importanceLevelId: 3,
            channelId: 1,
            bucketId: null,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 3,
            name: 'Learning English 3', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 2,
            participantId: [1, 2, 3, 4], 
            createdDate: 'a few seconds ago', 
            dueDate: '3 day left', 
            statusId: 2, 
            importanceLevelId: 2,
            channelId: 1,
            bucketId: null,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 4,
            name: 'Learning English 4', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 4,
            participantId: [1, 2, 3, 4], 
            createdDate: '2 days ago', 
            dueDate: '2 day left', 
            statusId: 3, 
            importanceLevelId: 4,
            channelId: 1,
            bucketId: 1,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 5,
            name: 'Learn JS', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 2,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 6,
            name: 'Learn HTML', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 3,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 7,
            name: 'Learn SCSS', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 1,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
        {
            id: 8,
            name: 'Learn Javascript', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 2,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {name: 'Listening', assignee: 'Trang Nguyen'},
                {name: 'Reading', assignee: 'Trang Nguyen'},
                {name: 'Speaking', assignee: 'Trang Nguyen'}
            ], 
        },
    ],
    workItemMenu: [
        { icon: faTasks, name:"Work Stream" }, 
        { icon: faUser, name: "Owned Works" }, 
        { icon: faUsers, name: "Participated Works" }, 
        { icon: faArchive, name: "Archived Works" }
    ],
    activityMenu: [
        { icon: faArrowRight, name:"Incoming" }, 
        { icon: faArrowLeft, name: "Outgoing" } 
    ],
    isViewDetail: false,
    isWorkStream: false,
    // participant: [
    //     {id: 1, name: 'Thien Huynh', avatar: 'https://vcdn-vnexpress.vnecdn.net/2020/09/23/01-4451-1600828895.jpg'},
    //     {id: 2, name: 'Mai Thao', avatar: 'https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-Anuko-noi-tieng-tren-mang-xa-hoi.jpg'},
    //     {id: 3, name: 'Anros Nguyen', avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/01/cho-phoc-soc-long-mau-nau-cute-de-thuong.jpg'},
    //     {id: 4, name: 'Thanh Van', avatar: 'https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg'},
    //     {id: 5, name: 'Diem Phuoc', avatar: 'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-ch%C3%BA-ch%C3%B3-d%E1%BB%85-th%C6%B0%C6%A1bg.jpg'},
    // ],
    // attachmentList: [
    //     {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
    //     {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
    //     {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
    // ]
}

function findStatusById(id) {
    return DATA.status.find(element => element.id === id);
}
function findImportanceLevelById(id) {
    return DATA.importanceLevel.find(element => element.id === id);
}
function findChannelById(id) {
    return DATA.channelList.find(element => element.id === id);
}
function findBucketById(id) {
    return DATA.bucketList.find(element => element.id === id);
}
function findOwnerById(id) {
    return DATA.userList.find(element => element.id === id);
}
function findParticipantsById(id) {
    return DATA.userList.filter(element => element.id === id);
}
function findTagsById(id) {
    return DATA.tagList.filter(element => element.id === id);
}
export {DATA, findStatusById, findChannelById, findOwnerById}