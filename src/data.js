import Moment from 'react-moment';

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
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 2,
            name: 'Learning English 2', 
            description: 'This is a work item of Thien Huynh',
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 3,
            name: 'Learning English 3', 
            description: 'This is a work item of Ansros',
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 3},
                {id: 3, name: 'Speaking', assigneeId: 4}
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 3},
                {id: 3, name: 'Speaking', assigneeId: 4}
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
                {id: 1, name: 'Listening', assigneeId: 3},
                {id: 2, name: 'Reading', assigneeId: 1},
                {id: 3, name: 'Speaking', assigneeId: 4}
            ], 
        },
        {
            id: 9,
            name: 'Learn Spanish', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 4,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 10,
            name: 'Learn Korean', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 4,
            activitiesList: [
                {name: 'Practice Listening', assignee: 'Trang Nguyen', createdTime:'15 mins ago', label:'User'},
                {name: 'Trang Nguyen has change status from New to In Progress', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Write an English essay', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'},
                {name: 'Trang Nguyen has delete todo: Listening', assignee: 'Trang Nguyen', createdTime:'2 days ago', label:'System'},
                {name: 'Practice Speaking', assignee: 'Trang Nguyen', createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 11,
            name: 'Learn Japanese', 
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 12,
            name: 'Learn Chinese', 
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 13,
            name: 'Learn French', 
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
        {
            id: 14,
            name: 'Learn Italian', 
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
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
        },
    ],
    activityLabel: [
        {id: 1, name: 'System'},
        {id: 2, name: 'Communication'},
        {id: 3, name: 'User'},
    ],
    isViewDetail: false,
    isWorkStream: false,
    // attachmentList: [
    //     {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
    //     {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
    //     {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
    // ]
};

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
function findTagsById(id) {
    return DATA.tagList.find(element => element.id === id);
}
function findWorkItemById(id) {
    return DATA.workItemList.find(element => element.id === id);
}
function addTag(workId, text) {
    DATA.tagList.push({ id: Math.random().toString().substring(2), name: text});
    const workItem = findWorkItemById(workId);
    workItem.tagId.push(DATA.tagList[DATA.tagList.length-1].id);
}
function addNewTodo(workId, text) {
    const workItem = findWorkItemById(workId);
    workItem.todoList.push({ id: Math.random().toString().substring(2), name: text, assigneeId: 1});
}
function deleteTodo(workId, todoId) {
    const workItem = findWorkItemById(workId);
    const todoIndex = workItem.todoList.findIndex(item => item.id === todoId);
    workItem.todoList.splice(todoIndex, 1);
}
function editWorkItemDescription(workId, text) {
    const workItem = findWorkItemById(workId);
    workItem.description = text;
}
function addWorkItem(text) {
    const newItem = {
        id: Math.random().toString().substring(2), 
        name: text, 
        description: 'This is a new work item',
        tagId: null,
        ownerId: 3,
        participantId: null,
        createdDate: new Date().toLocaleString() + '', 
        dueDate: null,
        statusId: 1, 
        importanceLevelId: null,
        channelId: 1,
        assignee: null, 
        bucketId: null,
        activitiesList: [
            {name: 'Created a new work item', 
                assigneeId: 3, 
                createdTime:<Moment fromNow>{new Date().toLocaleString() + ''}</Moment>, 
                labelId: 1}],
        todoList: null};
    DATA.workItemList = [
        newItem,
        ...DATA.workItemList
    ];
    return DATA.workItemList;
}
function addNewBucket(text) {
    const newBucket = { id: Math.random().toString().substring(2), name: text };
    DATA.bucketList = [
        newBucket,
        ...DATA.bucketList
    ];
    return DATA.bucketList;
}
function deleteBucket(bucketId) {
    const bucketIndex = DATA.bucketList.findIndex(item => item.id === bucketId);
    DATA.bucketList.splice(bucketIndex, 1);
    DATA.bucketList = [...DATA.bucketList];
    revertWorkItemToWorkStream(bucketId);
    return DATA.bucketList;
}
function revertWorkItemToWorkStream(bucketId) {
    for (let i = 0; i < DATA.workItemList.length; i++) {
        if (DATA.workItemList[i].bucketId === bucketId) {
            DATA.workItemList[i].bucketId = null;
        }
    }
    DATA.workItemList = [...DATA.workItemList];
    return DATA.workItemList;
}
function editBucketName(bucketId, text) {
    const bucket = findBucketById(bucketId);
    bucket.name = text;
    // console.log('bucketName', DATA.bucketList[0].name);
    // console.log('bucketList', DATA.bucketList);
    return [...DATA.bucketList];

}
export { DATA, findStatusById, findChannelById, findOwnerById, findBucketById, findWorkItemById, findImportanceLevelById, findTagsById};
export { addTag, addNewTodo, deleteTodo, editWorkItemDescription, addWorkItem, addNewBucket, deleteBucket, revertWorkItemToWorkStream, editBucketName };