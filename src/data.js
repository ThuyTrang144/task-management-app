import { FilePdfOutlined, FileImageOutlined, FileWordOutlined } from '@ant-design/icons';

export const DATA = {
    channelList: [
        { id: 1, name: 'Personal', workItem: 10, users: 5 },
        { id: 2, name: 'Public', workItem: 10, users: 5  },
        { id: 3, name: 'Learning', workItem: 10, users: 5  }
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
    userList: [
        { id: 1, username: 'thien', name: 'Thien Huynh', avatar: 'https://vcdn-vnexpress.vnecdn.net/2020/09/23/01-4451-1600828895.jpg', email: 'thien@gmail.com' },
        { id: 2, username: 'thao', name: 'Mai Thao', avatar: 'https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-Anuko-noi-tieng-tren-mang-xa-hoi.jpg', email: 'thao@gmail.com' },
        { id: 3, username: 'anros', name: 'Anros Nguyen', avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/01/cho-phoc-soc-long-mau-nau-cute-de-thuong.jpg', email: 'anros@gmail.com' },
        { id: 4, username: 'van', name: 'Thanh Van', avatar: 'https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg', email: 'van@gmail.com' },
        { id: 5, username: 'phuoc', name: 'Diem Phuoc', avatar: 'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-ch%C3%BA-ch%C3%B3-d%E1%BB%85-th%C6%B0%C6%A1bg.jpg', email: 'phuoc@gmail.com' },
    ], 
    workItemList: [
        {
            id: '1',
            name: 'Learning English 1', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [3],
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
            id: '2',
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
            id: '3',
            name: 'Learning English 3', 
            description: 'This is a work item of Ansros',
            tagId: [1],
            ownerId: 2,
            participantId: [1, 2, 3, 4], 
            createdDate: 'a few seconds ago', 
            dueDate: '3 day left', 
            statusId: 2, 
            importanceLevelId: 2,
            channelId: 2,
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
            id: '4',
            name: 'Learning English 4', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 4,
            participantId: [1, 2, 3, 4], 
            createdDate: '2 days ago', 
            dueDate: '2 day left', 
            statusId: 3, 
            importanceLevelId: 4,
            channelId: 2,
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
            id: '5',
            name: 'Learn JS', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 2, 
            importanceLevelId: 1,
            channelId: 3,
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
            id: '6',
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
            id: '7',
            name: 'Learn SCSS', 
            description: 'This is a work item of Trang Nguyen',
            tagId: [1, 2, 3],
            ownerId: 1,
            participantId: [1, 2, 3, 4], 
            createdDate: '3 days ago', 
            dueDate: '1 day left', 
            statusId: 1, 
            importanceLevelId: 1,
            channelId: 3,
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
            id: '8',
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
            id: '9',
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
            id: '10',
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
            id: '11',
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
            id: '12',
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
            id: '13',
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
            id: '14',
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
    activityLabel: [
        {id: 1, name: 'System'},
        {id: 2, name: 'Communication'},
        {id: 3, name: 'User'},
    ],
};
