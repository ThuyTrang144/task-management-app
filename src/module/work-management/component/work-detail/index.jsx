import React from 'react';
import './styles.scss';
import { Header, TodoList, TagList, Description, ActivityList, Assignment, Attachment} from './component';
import { DataContext } from '../../../../context';
import { WorkDetailContext } from './context';

class WorkDetail extends React.PureComponent {
    render() {
        return (
            <div id="work-detail-board" className="work-detail">
                <DataContext.Consumer>
                    {value => { 
                        const workDetailData = value.findWorkItemById(value.state.activeId);
                        return (
                            <WorkDetailContext.Provider value={{workDetailData: workDetailData}} >
                                <Header/>
                                <div className='detail-view'>
                                    <div className='detail-view-left'>
                                        <TagList/>
                                        <Description/>
                                        <TodoList/>
                                        <ActivityList/>
                                    </div>
                                    <div className='detail-view-right'>
                                        <Assignment/>
                                        <Attachment/>
                                    </div>
                                </div>
                            </WorkDetailContext.Provider>);}}
                </DataContext.Consumer>
            </div>
        );
    }
}

export default WorkDetail;
