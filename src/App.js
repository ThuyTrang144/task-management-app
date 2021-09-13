import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DataContext } from './context';
import { useContext, useState } from 'react';
import { status, importanceLevel } from './constant';

function App() {
    const context = useContext(DataContext);
    const [tagList] = useState(context.tagList);
    const [channelList] = useState(context.channelList);
    const [userList] = useState(context.userList);
    const [archivedWorkList] = useState(context.archivedWorkList);
    const [activeId, setActiveIdState] = useState(context.activeId);
    const [isViewDetail, setIsViewDetailState] = useState(context.isViewDetail);
    function findStatusById(id) {
        return status.find(element => element.id === id);
    }
    function findImportanceLevelById(id) {
        return importanceLevel.find(element => element.id === id);
    }
    function findChannelById(id) {
        return channelList.find(element => element.id === id);
    }
    function findUserById(id) {
        return userList.find(element => element.id === id);
    }
    function findTagsById(id) {
        return tagList.find(element => element.id === id);
    }
    function viewWorkDetail(id) { 
        setIsViewDetailState(true);
        setActiveIdState(id);
    }
    function backToBucketBoard() {
        setIsViewDetailState(false);
    }
    return (
        <DataContext.Provider
            value={{
                state: { 
                    channelList, 
                    userList,
                    tagList,
                    activeId,
                    isViewDetail
                },
                findStatusById: findStatusById,
                findImportanceLevelById: findImportanceLevelById,
                findChannelById:findChannelById,
                findUserById: findUserById,
                findTagsById: findTagsById,
                viewWorkDetail: viewWorkDetail,
                backToBucketBoard: backToBucketBoard
            }}
        >
            <Header />
            <WorkManagement             
                tagList={tagList}
                archivedWorkList={archivedWorkList}/>
        </DataContext.Provider>
    );
}
export default App;