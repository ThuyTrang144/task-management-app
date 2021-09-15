import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { useUserList } from '../../../../../../general-data-hook/useUserList';
import { WorkDetailContext } from '../../context';

const Assignment =  React.memo(function () {
    const { findUserById } = useUserList();
    const workContext = useContext(WorkDetailContext);
    console.log('work context', workContext);;
    const owner = findUserById(workContext.workDetailData.ownerId);
    function renderParticipant() {
        return workContext.workDetailData.participantId.map(item => {
            const participant = findUserById(item);
            return (
                <img key={participant.id} src={participant.avatar} alt='participant avatar'></img>
            );

        });
    }
    return (
        <div className='assigment-section'>
            <div className="owner-section">
                <span className="title">OWNER</span><br></br>
                <div className="owner-info-group">
                    <div className="owner-name">
                        <img src={owner.avatar} alt='owner avatar'></img>
                        <span>{owner.name}</span>
                    </div>
                    <div className="transfer-btn">Transfer Owner</div>
                </div>
            </div>
            <div className="participant-section">
                <div className="participant-header">
                    <WorkDetailContext.Consumer>
                        {value => <span className="title">PARTICIPANTS ({value.workDetailData.participantId.length})</span>}
                    </WorkDetailContext.Consumer>
                    <div className="participant-group-btn">
                        <span>Leave</span>
                        <span>|</span>
                        <span>Edit</span>
                    </div>
                </div>
                <div className="participant-info-group">
                    {renderParticipant()}
                </div>
            </div>
            <div className="date-section">
                <span className="title">CREATED</span><br></br>
                <div className="created-date">
                    <span style={{fontWeight:'bold'}} >{owner.name}</span><span> on 01/01/2020</span>
                </div>
            </div>
        </div>
    );
});

export default Assignment;