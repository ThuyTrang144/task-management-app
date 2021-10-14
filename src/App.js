import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DataContext } from './context';
import { useEffect, useState } from 'react';
import { DATA } from './data';
import { Route, BrowserRouter as Router, Switch } from  'react-router-dom';
import { LoginPage } from './module/login';
import { SettingPage } from './module/setting';
import { channelListUrl, settingMenu, statusUrl } from './constant';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {

    const [channelList, setChannelList] = useState([]);  
    const [currentChannel, setCurrentChannel] = useState();
    const [tagList, setTagList] = useState(DATA.tagList);
    const [userList, setUserList] = useState(DATA.userList);
    const [activeId, setActiveIdState] = useState();
    const [isViewDetail, setIsViewDetailState] = useState(false);
    const [user, setUser] = useState(userList[0]); 
    const [activeMenuItem, setActiveMenuItem] = useState(settingMenu[0].id);
    const [ tagIdList, setTagIdList ] = useState([]);
    const [ statusList, setStatusList ] = useState([]);
    const [ importanceLevelList, setImportanceLevelList ] = useState([]);

    const onSubmitLogin = (text) => {

        const user = userList.find(element => element.username === text);
        setUser(user);
    } ;

    const getChannelList = async () => {
        try {
            const res = await fetch(channelListUrl);
            return res.json();
        } catch(err) {
            console.log('channel', err);
        }
    };


    useEffect(() => {
        (async () => {
            const channelList = await getChannelList();
            setChannelList(channelList.results);
            setCurrentChannel(channelList.results[0]);
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


    return (
        <Router>
            <Provider store={store}>
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
            </Provider>
        </Router>
    );
}
export default App;