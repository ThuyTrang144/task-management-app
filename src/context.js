import React from 'react';

export const DataContext = React.createContext({
    channelList: [
        { id: 1, name: 'Personal' },
        { id: 2, name: 'Public' },
        { id: 3, name: 'Learning' }
    ],
    tagList: [
        { id: 1, name: '#english' },  
        { id: 2, name: '#coding' },
        { id: 3, name: '#reading' },
        { id: 4, name: '#cooking' }
    ],
    userList: [
        { id: 1, name: 'Thien Huynh', avatar: 'https://vcdn-vnexpress.vnecdn.net/2020/09/23/01-4451-1600828895.jpg' },
        { id: 2, name: 'Mai Thao', avatar: 'https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-Anuko-noi-tieng-tren-mang-xa-hoi.jpg' },
        { id: 3, name: 'Anros Nguyen', avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/01/cho-phoc-soc-long-mau-nau-cute-de-thuong.jpg' },
        { id: 4, name: 'Thanh Van', avatar: 'https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg' },
        { id: 5, name: 'Diem Phuoc', avatar: 'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-ch%C3%BA-ch%C3%B3-d%E1%BB%85-th%C6%B0%C6%A1bg.jpg' },
    ], 
    isWorkStream: false,
    archivedWorkList: [],
    activeId: undefined,
    isViewDetail: false,
    findStatusById: () => {},
    findImportanceLevelById: () => {},
    findChannelById: () => {},
    findBucketById: () => {},
    findOwnerById: () => {},
    findTagsById: () => {},
    findWorkItemById: () => {},
    addTag: () => {},
    addNewTodo: () => {},
    addNewActivity: () => {},
    deleteTodo: () => {},
    editWorkItemDescription: () => {},
    addWorkItem: () => {},
    addNewBucket: () => {},
    deleteBucket: () => {},
    revertWorkItemToWorkStream: () => {},
    editBucketName: () => {},
    addFavouriteItem: () => {},
    completeWorkItem: () => {},
    archiveCompletedWorkItem: () => {},
    deleteAttachment: () => {}
});