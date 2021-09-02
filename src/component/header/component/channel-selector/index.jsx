import React from 'react';
import './style.scss';
import { Select } from 'antd';
const { Option } = Select;

class ChannelSelector extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.channelList[0].name
        };
    }
    onChange = (option) => {
        const value = option;
        this.setState({ value });
    }
    rederChannelName() {
        return this.props.channelList.map(item => {
            return <Option key={item.id} value={item.name}>{item.name}</Option>;
        });
    }
    render() {
        return (
            <Select
                className='channel-selector'
                defaultValue={'Channel: ' + this.props.channelList[0].name.toLocaleUpperCase()}
                onChange={this.onChange}
                value={'Channel: ' + this.state.value.toLocaleUpperCase()}
            >
                {this.rederChannelName()}
            </Select>
        );
    }
}
export default ChannelSelector;