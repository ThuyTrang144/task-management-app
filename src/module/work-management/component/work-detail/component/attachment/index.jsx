import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useContext } from 'react/cjs/react.development';
import { WorkDetailContext } from '../../context';
import { useAttachment } from '../../../../work-item-hook/useAttachment';

const Attachment = React.memo(function () {
    const workContext = useContext(WorkDetailContext);
    const { deleteAttachment } = useAttachment();
    const [attachmentList, setAttachmentList] = useState(workContext.workDetailData.attachmentList);
    function renderAttachmentList() {
        return attachmentList.map(item =>
            ( <div key={item.id} className="attachment-item">
                <div>
                    {item.type}
                    <span>{item.size}</span>
                    <span>{item.name}</span>
                </div>
                <WorkDetailContext.Consumer>
                    {value => {
                        function deleteAttachmentItem () {
                            const newAttachmentList = deleteAttachment(value.workDetailData.id, item.id);
                            setAttachmentList(newAttachmentList);
                        }
                        return (
                            <DeleteOutlined 
                                id="delete-icon" 
                                onClick={deleteAttachmentItem}/>);
                    }}
                </WorkDetailContext.Consumer>
            </div> )
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