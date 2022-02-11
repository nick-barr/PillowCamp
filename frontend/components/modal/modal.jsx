import React from 'react';
import ReservationUpdate from '../reservation/reservationUpdate_container';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
    }
    
    handleBackgroundClick() {
        this.props.inactiveModal(); 
    }

    render(){
        if (!this.props.modal) {
            return null;
        }

        let component;

        switch (this.props.modal) {
            case 'bookingUpdate':
                component = <ReservationUpdate />;
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={this.handleBackgroundClick}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        );
    }
}

export default Modal;