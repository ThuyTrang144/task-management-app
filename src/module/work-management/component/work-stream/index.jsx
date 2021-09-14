import React from 'react';
import { DataContext } from '../../../../context';
import { AddingBox, WorkList } from './component';
import './styles.scss';

class WorkStream extends React.PureComponent {
    static contextType = DataContext;
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }
    searchWorkItem = (text) => {
        this.setState({ searchValue: text });
    }
    render() {
        return (
            <div className="work-stream">
                <AddingBox
                    searchValue={this.state.searchValue}
                    searchWorkItem={this.searchWorkItem}
                />
                <WorkList 
                    searchValue={this.state.searchValue} 
                />
            </div>
        );
    }
}

export default WorkStream;