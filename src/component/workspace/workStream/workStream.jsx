import React from 'react';
import AddingBox from './addingBox';
import ItemCard from './itemCard';
import './styles.scss';
class WorkStream extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            workItemList: this.props.workItemList,
            searchValue: '',
        };
    }
    renderItemList() {
        const { workItemList, searchValue } = this.state;
        const searchResult = workItemList.filter(item => item.name.toLocaleLowerCase().startsWith(searchValue));
        const newList = (searchValue.length !== 0) ? searchResult : workItemList;
        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no work item match with your search. Please add a new one.</p>;
        }
        return newList.map((item, index) =>
            <ItemCard
                key={item.name}
                index={index}
                name={item.name}
                status={item.status}
                assignee={item.assignee}
                createdDate={item.createdDate}
                dueDate={item.dueDate}
                isSelected={item.isSelected}
                viewWorkDetailOfWorkStream={this.props.viewWorkDetailOfWorkStream}
                isViewDetail={this.props.isViewDetail}
                changeSelectedStatus={this.changeSelectedStatus}
            />
        );
    }
    changeSelectedStatus = (keyIndex) => {
        const newList = this.state.workItemList.map((item, index) => {
            if (keyIndex === index) {
                item = {...item, isSelected: true};
            } else  {
                item = {...item, isSelected: false};
            }
            return item;
        });
        this.setState({workItemList: newList});
    }
    addWorkItem = (text) => {
        const { workItemList } = this.state;
        workItemList.splice(0, 0, {name: text, status:'New', assignee: 'Trang Nguyen', createdDate: new Date().toLocaleString() + '', dueDate: '1 day left'  });
        this.setState({ workItemList: [...workItemList] });
    }
    searchWorkItem = (text) => {
        this.setState({ searchValue: text });
    }
    render() {
        return (
            <div className="work-stream">
                <AddingBox
                    addWorkItem={this.addWorkItem}
                    searchValue={this.state.searchValue}
                    searchWorkItem={this.searchWorkItem}/>
                <div className='work-listing'>
                    {this.renderItemList()}
                </div>
            </div>
        );
    }
}

export default WorkStream;