import React from 'react';

export const WorkItemContext = React.createContext({
    workItemList: [],
    findWorkItemById: () => {},
    addNewTodo: () => {},
    addNewActivity: () => {},
    deleteTodo: () => {},
    editWorkItemDescription: () => {},
    addWorkItem: () => {},
    revertWorkItemToWorkStream: () => {},
    addFavouriteItem: () => {},
    completeWorkItem: () => {},
    archiveCompletedWorkItem: () => {},
    deleteAttachment: () => {},
    addTag: () => {}
});