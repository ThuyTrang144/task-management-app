import React from 'react';
import { DataContext } from '../../context';
import { SideBar, WorkStream, WorkDetail, BucketBoard } from './component';
import './style.scss';

const WorkManagement = React.memo(function () {
    return ( 
        <div className='work-management'>
            <SideBar />
            <WorkStream/>       
            <DataContext.Consumer> 
                { value => {
                    return value.state.isViewDetail ? 
                        <WorkDetail/> :
                        <BucketBoard/>;
                } 
                }
            </DataContext.Consumer> 
        </div>
    );
});
export default WorkManagement;