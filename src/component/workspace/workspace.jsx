import React from 'react';
import SideBar from './sideBar/sideBar';
import './style.scss'
import BucketList from './workBoard/bucketList';
import WorkDetail from './workDetail/workDetail';
import WorkStream from './workStream/workStream';
class WorkSpace  extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isViewDetail: false
        }
    }
    viewWorkDetail = () => {
        console.log('im here')
       if (this.state.isViewDetail) {
           this.setState({ isViewDetail: false })
       } else {
        this.setState({ isViewDetail: true })
       }
    }
    render() { 
        return ( 
            <div className='workspace'>
                <SideBar />
                <WorkStream viewWorkDetail={this.viewWorkDetail}/>
                {this.state.isViewDetail ? <BucketList viewWorkDetail={this.viewWorkDetail}/> : <WorkDetail viewWorkDetail={this.viewWorkDetail}/>}
            </div>
         );
    }
}
 
export default WorkSpace ;