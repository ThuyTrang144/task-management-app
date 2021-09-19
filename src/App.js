import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DataContext } from './context';
import { useState } from 'react';
import { DATA } from './data';
import { Route, BrowserRouter as Router, Switch } from  'react-router-dom';
import { LoginPage } from './module/login';
import { SettingPage } from './module/setting';

function App() {

    const [channelList] = useState(DATA.channelList);
    const [tagList, setTagList] = useState(DATA.tagList);
    const [userList] = useState(DATA.userList);
    const [activeId, setActiveIdState] = useState();
    const [isViewDetail, setIsViewDetailState] = useState(false);
    const [ user, setUser ] = useState(); 

    const onSubmitLogin = (text) => {
        const user = userList.find(element => element.username === text);
        setUser(user);
    } ;

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

    return (
        <Router>
            <DataContext.Provider
                value={{
                    state: {
                        channelList, 
                        userList,
                        tagList,
                        activeId,
                        isViewDetail,
                        viewWorkDetail,
                        user
                    },
                    viewWorkDetail,
                    backToBucketBoard,
                    addTag,
                    onSubmitLogin
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