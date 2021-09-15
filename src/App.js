import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DataContext } from './context';
import { useState } from 'react';
import { useContext } from 'react/cjs/react.development';

function App() {
    const context = useContext(DataContext);
    const [channelList] = useState(context.channelList);
    const [tagList] = useState(context.tagList);
    const [userList] = useState(context.userList);
    const [activeId, setActiveIdState] = useState('');
    const [isViewDetail, setIsViewDetailState] = useState('');
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
                channelList, 
                userList,
                tagList,
                activeId,
                isViewDetail,
                viewWorkDetail,
                backToBucketBoard
            }}
        >
            <Header />
            <WorkManagement/>
        </DataContext.Provider>
    );
}
export default App;