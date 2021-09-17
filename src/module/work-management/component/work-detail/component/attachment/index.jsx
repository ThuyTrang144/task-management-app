import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useAttachment } from '../../../../work-item-hook/useAttachment';

const Attachment = React.memo(function () {
    const { attachmentList, deleteAttachment } = useAttachment();
    function renderAttachmentList() {
        return attachmentList.map(item =>
            ( <div key={item.id} className="attachment-item">
                <div>
                    {item.type}
                    <span>{item.size}</span>
                    <span>{item.name}</span>
                </div>
                <DeleteOutlined 
                    id="delete-icon" 
                    onClick={() => deleteAttachment(item.id)}/>
            </div>)
        );
    }
    return (
        <div className="attachment-section">
            <div className="attachment-title">
                <span>+Add Attachment</span>
                <div className="attachment-dash-line"></div>
            </div>
            <div className="attachment-list">
                {renderAttachmentList()}
            </div>
        </div>
    );
});
export default Attachment;