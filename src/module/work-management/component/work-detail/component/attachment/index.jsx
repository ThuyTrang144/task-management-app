import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useContext } from 'react/cjs/react.development';
import { WorkDetailContext } from '../../context';
import { WorkItemContext } from '../../../../context/workItem';

const Attachment = React.memo(function () {
    const workContext = useContext(WorkDetailContext);
    function renderAttachmentList() {
        return workContext.workDetailData.attachmentList.map(item =>
            ( <div key={item.id} className="attachment-item">
                <div>
                    {item.type}
                    <span>{item.size}</span>
                    <span>{item.name}</span>
                </div>
                <WorkItemContext.Consumer>
                    {value1 => {
                        return <WorkDetailContext.Consumer>
                            {value2 => {
                                function deleteAttachment() {
                                    value1.deleteAttachment(value2.workDetailData.id, item.id);
                                }
                                return <DeleteOutlined id="delete-icon" onClick={deleteAttachment}/>;
                            }}
                        </WorkDetailContext.Consumer>;
                    }}
                </WorkItemContext.Consumer>
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