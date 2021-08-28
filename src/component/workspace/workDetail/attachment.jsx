import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
class Attachment extends React.PureComponent {
    renderAttachmentList() {
        return this.props.attachmentList.map((item, index) => 
            ( <div key={item.name} index={index} className="attachment-item">
                <div>
                    {item.type}
                    <span>{item.size}</span>
                    <span>{item.name}</span>
                </div>
                <DeleteOutlined id="delete-icon"/>
                </div> )
        )
    }
    render() { 
        const { attachmentList } = this.props;
        return ( 
            <div className="attachment-section">
                <div className="attachment-title">
                    <span>+Add Attachment</span>
                    <div className="attachment-dash-line"></div>
                </div>
                <div className="attachment-list">
                   {this.renderAttachmentList()}
                </div>
            </div>
         );
    }
}
 
export default Attachment;