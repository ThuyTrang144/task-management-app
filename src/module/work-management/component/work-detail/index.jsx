import React from 'react';
import './styles.scss';
import { Header, TodoList, TagList, Description, ActivityList, Assignment, Attachment} from './component';
import { DataContext } from '../../../../context';
import { WorkDetailContext } from './context';
import { WorkItemContext } from '../../context/workItem';

class WorkDetail extends React.PureComponent {
    render() {
        return (
            <div id="work-detail-board" className="work-detail">
                <DataContext.Consumer>
                    {value1 => { 
                        return <WorkItemContext.Consumer>
                            {value2 => {
                                const workDetailData = value2.findWorkItemById(value1.state.activeId);
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
                        </WorkItemContext.Consumer>;}}
                </DataContext.Consumer>
            </div>
        );
    }
}

export default WorkDetail;
