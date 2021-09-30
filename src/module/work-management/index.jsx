import React from 'react';
import { DataContext } from '../../context';
import { BucketProvider } from './bucket-hook/useBucket';
import { SideBar, WorkStream, WorkDetail, BucketBoard } from './component';
import './style.scss';

const WorkManagement = React.memo(function () {
    return ( 
        <div className='work-management'>
            <BucketProvider>
                <SideBar />
                <WorkStream/>       
                <DataContext.Consumer> 
                    { value => {
                        return ( 
                            value.state.isViewDetail ? <WorkDetail/> : <BucketBoard/>
                        );
                    }}
                </DataContext.Consumer> 
            </BucketProvider>
        </div> 
    );
});
export default WorkManagement;