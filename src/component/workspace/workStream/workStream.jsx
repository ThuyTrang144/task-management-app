import React from 'react';
import AddingBox from './addingBox';
import ItemList from './itemList';
import './styles.scss';
class WorkStream extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div className="work-stream">
                <AddingBox />
                <ItemList />
            </div>
         );
    }
}
 
export default WorkStream;