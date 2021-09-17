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
// import React, { Component } from 'react';
// import './App.css';

// export default class AppDragDropDemo extends Component {
//     state = {
//         tasks: [
//             {name:'Learn Angular',category:'wip', bgcolor: 'yellow'},
//             {name:'React', category:'wip', bgcolor:'pink'},
//             {name:'Vue', category:'complete', bgcolor:'skyblue'}
//         ]
//     }

//     onDragStart = (ev, id) => {
//         console.log('dragstart:',id);
//         ev.dataTransfer.setData('abc', id);
//     }

//     onDragOver = (ev) => {
//         console.log('abc');
//         ev.preventDefault();
//     }

//     onDrop = (ev, cat) => {
//         let id = ev.dataTransfer.getData('abc');
       
//         let tasks = this.state.tasks.filter((task) => {
//             if (task.name == id) {
//                 task.category = cat;
//             }
//             return task;
//         });

//         this.setState({
//             ...this.state,
//             tasks
//         });
//     }

//     render() {
//         var tasks = {
//             wip: [],
//             complete: []
//         };

//         this.state.tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div key={t.name} 
//                     onDragStart = {(e) => this.onDragStart(e, t.name)}
//                     draggable
//                     className="draggable"
//                     style = {{backgroundColor: t.bgcolor}}
//                 >
//                     {t.name}
//                 </div>
//             );
//         });

//         return (
//             <div className="container-drag">
//                 <h2 className="header">DRAG & DROP DEMO</h2>
//                 <div className="wip"
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>{this.onDrop(e, 'wip');}}>
//                     <span className="task-header">WIP</span>
//                     {tasks.wip}
//                 </div>
//                 <div className="droppable" 
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>this.onDrop(e, 'complete')}>
//                     <span className="task-header">COMPLETED</span>
//                     {tasks.complete}
//                 </div>


//             </div>
//         );
//     }
// }