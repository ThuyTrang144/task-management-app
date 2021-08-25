import React from 'react';
import './styles.scss';
import { EditOutlined } from '@ant-design/icons';
import TagList from './tagList';
import WorkDetailHeader from './workDetailHeader';
import { Input } from 'antd';
class WorkDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            description: 'This is a work item',
            isEditDes: false
         }
    }
    openEditView = () => {
        if (this.state.isEditDes) {
            this.setState({ isEditDes: false })
        } else {
            this.setState({ isEditDes: true })
        }
    }
    onChange = (e) => {
        const description = e.target.value
        console.log('des', description)
        this.setState({ description })
    }
    editDescription = (text) => {
        this.setState( { description: text })
        console.log('this.state.description', this.state.description)
        return this.state.description
    }
    onKeyPress = (e) => {
        if (e.charCode === 13) {
            this.editDescription(this.state.description)
            this.setState({ isEditDes: false })
        }
    }
    render() { 
        return ( 
            <div id="work-detail-board" className="work-detail">
                <WorkDetailHeader viewWorkDetail={this.props.viewWorkDetail} />
                <div className='detail-view'>
                    <div className='detail-view-left'>
                        <TagList />
                        <div className="item-description">
                            {this.state.isEditDes ? <Input value={this.state.description} onChange={this.onChange} onKeyPress={this.onKeyPress}/> : <p>{this.state.description}<EditOutlined onClick={this.openEditView}/></p>}
                        </div>
                    </div>
                </div>        
            </div>
         );
    }
}
 
export default WorkDetail;