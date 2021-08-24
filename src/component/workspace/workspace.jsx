import React from 'react';
import SideBar from './sideBar/sideBar';
import './style.scss'
import BucketList from './workBoard/bucketList';
import WorkStream from './workStream/workStream';
class WorkSpace  extends React.PureComponent {
 
    render() { 
        return ( 
            <div className='workspace'>
                <SideBar />
                <WorkStream />
                <BucketList />
            </div>
         );
    }
}
 
export default WorkSpace ;