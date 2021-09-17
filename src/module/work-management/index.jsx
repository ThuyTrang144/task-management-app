import React from 'react';
import { DataContext } from '../../context';
import { BucketProvider } from './bucket-hook/useBucket';
import { SideBar, WorkStream, WorkDetail, BucketBoard } from './component';
import './style.scss';
import { WorkItemProvider } from './work-item-hook/useWorkItem';

const WorkManagement = React.memo(function () {
    return ( 
        <div className='work-management'>
            <WorkItemProvider>
                <SideBar />
                <WorkStream/>       
                <DataContext.Consumer> 
                    { value => {
                        return value.state.isViewDetail ? 
                            <WorkDetail/> :
                            <BucketProvider>
                                <BucketBoard/>
                            </BucketProvider>;
                    }}
                </DataContext.Consumer> 
            </WorkItemProvider>
           
        </div>
    );
});
export default WorkManagement;