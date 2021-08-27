import React from 'react';
import { Simulate } from 'react-dom/test-utils';
class AssignmentSection extends React.PureComponent {
    renderParticipant() {
        return this.props.participant.map((item, index) => (
            <img key={item.name} index={index} src={item.avatar}></img>
        ))
    }
    render() { 
        const { owner, participant } = this.props;
        return ( 
            <div className='assigment-section'>
                <div className="owner-section">
                    <span className="title">OWNER</span><br></br>
                    <div className="owner-info-group">
                        <div className="owner-name">
                            <img src={owner[0].avatar}></img>
                            <span>{owner[0].name}</span>
                        </div>
                        <div className="transfer-btn">Transfer Owner</div>
                    </div>
                </div>
                <div className="participant-section">
                    <div className="participant-header">
                        <span className="title">PARTICIPANTS ({participant.length})</span>
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
                <div className="date-section">
                    <span className="title">CREATED</span><br></br>
                    <div className="created-date">
                        <span style={{fontWeight:'bold'}} >{owner[0].name}</span><span> on 01/01/2020</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AssignmentSection;