import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DataContext } from './context';
import { useState } from 'react';
import { DATA } from './data';
import { Route, BrowserRouter as Router, Switch } from  'react-router-dom';
import { LoginPage } from './module/login';
import { SettingPage } from './module/setting';
import { settingMenu } from './constant';

function App() {

    const [channelList, setChannelList] = useState(DATA.channelList);  
    const [currentChannelId, setCurrentChannelId] = useState(channelList[0].id);
    const [tagList, setTagList] = useState(DATA.tagList);
    const [userList] = useState(DATA.userList);
    const [activeId, setActiveIdState] = useState();
    const [isViewDetail, setIsViewDetailState] = useState(false);
    const [user, setUser] = useState(userList[0]); 
    const [activeMenuItem, setActiveMenuItem] = useState(settingMenu[0].id);
    const [ assigneeList, setAssigneeList ] = useState([]);    
    const [ tagIdList, setTagIdList ] = useState([]);
    const [ statusList, setStatusList ] = useState([]);
    const [ importanceLevelList, setImportanceLevelList ] = useState([]);

    const onSubmitLogin = (text) => {

        const user = userList.find(element => element.username === text);
        setUser(user);
    } ;
    const setCurrentActiveChannel = (id) => {
        setCurrentChannelId(id);
    };

    const addTag = (text) => {
        tagList.push({ id: Math.random().toString().substring(2), name: text});
        setTagList([...tagList]);
    };

    function viewWorkDetail(id) { 
        setIsViewDetailState(true);
        setActiveIdState(id);
    }

    function backToBucketBoard() {
        setIsViewDetailState(false);
    }

    const handleSelectedItem = (name) => {
        setActiveMenuItem(name);
    };
    
    const findAssigneeFilterList = (assigneeList) => {
        setAssigneeList(assigneeList);
    };

    const findTagIdFilterList = (tagIdList) => {
        setTagIdList(tagIdList);
    };
    const findStatusFilterList = (statusList) => {
        setStatusList(statusList);
    };
    const findImportanceLevelFilterList = (importanceLevelList) => {
        setImportanceLevelList(importanceLevelList);
    };
    const countTotalWorkItem = (workList) => {
        for (let i = 0; i < channelList.length; i++) {
            const list  = workList.filter(item => item.channelId === channelList[i].id);
            channelList[i]['totalWorkItem'] = list.length;
        }
    };
    const addNewChannel = (text) => {
        const newChannel = {
            id: Math.random().toString().substring(2), name: text
        };
        setChannelList([newChannel, ...channelList]);
    };
    return (
        <Router>
            <DataContext.Provider
                value={{
                    state: {
                        channelList, 
                        currentChannelId,
                        userList,
                        tagList,
                        activeId,
                        isViewDetail,
                        viewWorkDetail,
                        user,
                        activeMenuItem,
                        assigneeList,
                        tagIdList,
                        statusList,
                        importanceLevelList

                    },
                    setCurrentActiveChannel,
                    viewWorkDetail,
                    backToBucketBoard,
                    addTag,
                    onSubmitLogin,
                    handleSelectedItem,
                    findAssigneeFilterList, 
                    findTagIdFilterList,
                    findStatusFilterList,
                    findImportanceLevelFilterList,
                    addNewChannel,
                    countTotalWorkItem
                }}
            >
                <Switch>
                    <Route path='/login-page'>
                        <LoginPage/>
                    </Route>
                    <Route path='/work-management'>
                        <Header />
                        <WorkManagement/>
                    </Route>
                    <Route path='/setting-page'>
                        <Header />
                        <SettingPage />
                    </Route>
                </Switch>
            </DataContext.Provider>
        </Router>
    );
}
export default App;