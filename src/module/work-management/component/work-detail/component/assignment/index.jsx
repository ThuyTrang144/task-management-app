import React from 'react';
import { findUserById } from '../../../../../../data';

class Assignment extends React.PureComponent {
    renderParticipant() {
        return this.props.participantId.map(item => {
            const participant = findUserById(item);
            return (
                <img key={participant.id} src={participant.avatar} alt='participant avatar'></img>
            );

        });
    }
    render() {
        const owner = findUserById(this.props.ownerId);
        console.log('participant', this.props.participantId);
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
                        <span className="title">PARTICIPANTS ({this.props.participantId.length})</span>
                        <div className="participant-group-btn">
                            <span>Leave</span>
                            <span>|</span>
                            <span>Edit</span>
                        </div>
                    </div>
                    <div className="participant-info-group">
                        {this.renderParticipant()}
                    </div>
                </div>
                {/* <div className="date-section">
                    <span className="title">CREATED</span><br></br>
                    <div className="created-date">
                        <span style={{fontWeight:'bold'}} >{owner[0].name}</span><span> on 01/01/2020</span>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Assignment;