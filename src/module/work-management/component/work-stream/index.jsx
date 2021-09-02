import React from 'react';
import { addWorkItem } from '../../../../data';
import { AddingBox, WorkList } from './component';
import './styles.scss';

class WorkStream extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            workItemList: props.workItemList
        };
    }
    addWorkItem = (text) => {
        const workItemList = addWorkItem(text);
        this.setState({workItemList});  
    }
    searchWorkItem = (text) => {
        this.setState({ searchValue: text });
    }
    render() {
        return (
            <div className="work-stream">
                <AddingBox
                    workItemList={this.state.workItemList}
                    addWorkItem={this.addWorkItem}
                    searchValue={this.state.searchValue}
                    searchWorkItem={this.searchWorkItem}/>
                <WorkList workItemList={this.state.workItemList} searchValue={this.state.searchValue} viewWorkDetail={this.props.viewWorkDetail}/>
            </div>
        );
    }
}

export default WorkStream;