import React from 'react';
import { FilePdfOutlined, FileImageOutlined, FileWordOutlined} from '@ant-design/icons';

export const WorkItemContext = React.createContext({
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
            statusId: 2, 
            importanceLevelId: 1,
            channelId: 1,
            bucketId: 2,
            activitiesList: [
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 3},
                {id: 3, name: 'Speaking', assigneeId: 4}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 3},
                {id: 3, name: 'Speaking', assigneeId: 4}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 3},
                {id: 2, name: 'Reading', assigneeId: 1},
                {id: 3, name: 'Speaking', assigneeId: 4}
            ], 
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ],
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ], 
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ], 
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false
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
                {id: 1, name: 'Practice Listening', assigneeId: 1, createdTime:'15 mins ago', label:'User'},
                {id: 2, name: 'Trang Nguyen has change status from New to In Progress', assigneeId: 2, createdTime:'2 days ago', label:'System'},
                {id: 3, name: 'Write an English essay', assigneeId: 3, createdTime:'8 mins ago', label:'Communication'},
                {id: 4, name: 'Trang Nguyen has delete todo: Listening', assigneeId: 4, createdTime:'2 days ago', label:'System'},
                {id: 5,name: 'Practice Speaking', assigneeId: 1, createdTime:'8 mins ago', label:'Communication'}
            ],
            todoList: [
                {id: 1, name: 'Listening', assigneeId: 1},
                {id: 2, name: 'Reading', assigneeId: 2},
                {id: 3, name: 'Speaking', assigneeId: 3}
            ],
            attachmentList: [
                {id: 1, name: '[E Book ] BBC Top 100 E Books', size: '8.8MB', type: <FilePdfOutlined />},
                {id: 2, name: 'Cambridge 7', size: '8.8MB', type: <FileImageOutlined />},
                {id: 3, name: 'Collin English', size: '8.8MB', type: <FileWordOutlined />}
            ],
            isFavourite: false 
        },
    ],
    archivedWorkList: []
});