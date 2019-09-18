import React from "react";
import {Button} from 'reactstrap';
import "./modal.sass"

class Modal extends React.Component {
    state = {
        open: false,
        title: ""
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <>
                <p
                    onClick={this.handleOpen}
                    className={"link"}
                >
                    Read More ...
                </p>

                <div className={`modal-parent ${this.state.open ? "show" : "hide"}`} onClick={this.handleClose}>
                    <div className={`modal ${this.state.open ? "show" : "hide"}`}>
                        <div className={`modal-header`} >
                            <h3> {this.props.title}</h3>
                        </div>
                        <div className="modal--body">
                            {this.props.children}
                        </div>
                        <div className="modal--footer">
                            <Button className="info" onClick={this.handleClose}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Modal;