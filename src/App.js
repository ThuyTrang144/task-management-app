import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DataContext } from './context';
import { useEffect, useState } from 'react';
import { DATA } from './data';
import { Route, BrowserRouter as Router, Switch } from  'react-router-dom';
import { LoginPage } from './module/login';
import { SettingPage } from './module/setting';
import { channelListUrl, settingMenu, statusUrl, userListUrl } from './constant';
import { WorkItemProvider } from './module/work-management/work-item-hook/useWorkItem';

function App() {

    const [channelList, setChannelList] = useState([]);  
    const [currentChannel, setCurrentChannel] = useState();
    const [tagList, setTagList] = useState(DATA.tagList);
    const [userList, setUserList] = useState(DATA.userList);
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

    const getUserList = async () => {
        try {
            const res = await fetch(userListUrl);
            return res.json();
        } catch(err) {
            console.log('user list', err);
        }
    };

    const getChannelList = async () => {
        try {
            const res = await fetch(channelListUrl);
            return res.json();
        } catch(err) {
            console.log('channel', err);
        }
    };

    const getStatusList = async () => {
        try {
            let response = await fetch(statusUrl);
            return response.json();
        } catch (err) {
            console.log('status', err);
        }
    };

    useEffect(() => {
        (async () => {
            const userList = await getUserList();
            setUserList(userList.results);
            const channelList = await getChannelList();
            setChannelList(channelList.results);
            setCurrentChannel(channelList.results[0]);
            const status = await getStatusList();
            setStatusList(status.results);
        })();
    }, []);

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
    const findActiveChannel = (channel) => {
        setCurrentChannel(channel);
    };
    return (
        <Router>
            <DataContext.Provider
                value={{
                    state: {
                        channelList, 
                        currentChannel,
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
                    countTotalWorkItem,
                    findActiveChannel
                }}
            >                
                <Switch>
                    <Route path='/login-page'>
                        <LoginPage/>
                    </Route>
                    <WorkItemProvider>
                        <Route path='/work-management'>
                            <Header />
                            <WorkManagement/>
                        </Route>
                        <Route path='/setting-page'>
                            <Header />
                            <SettingPage />
                        </Route>
                    </WorkItemProvider>
                </Switch>
            </DataContext.Provider>
        </Router>
    );
}
export default App;