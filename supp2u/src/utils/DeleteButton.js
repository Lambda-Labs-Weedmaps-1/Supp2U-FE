import React from "react";

import { withRouter } from "react-router";
//Redux
import { connect } from "react-redux";
import { Buttonr } from 'reactstrap';
import {deleteReview} from "../actions/reviewsAction";
import "./buttonStyle.sass"


class DeleteButton extends React.Component {
    state = {
        open: false,
        title: ""
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleDelete = () => {
        switch (this.props.deleteType) {
            case "reviews":
                this.props.deleteReview(this.props.id);
                break;
            default:
                break;
        }
        this.handleClose();
    };

    handleDisplayType = () => {
        switch (this.props.displayType) {
            case "text":
                return <p onClick={this.handleOpen}>Delete</p>;
            default:
                return (
                    <Button
                        onClick={this.handleOpen}
                        className={"btn error"}
                    >
                        Delete Item
                    </Button>

            );
        }
    };

    render() {
        return (
            <>
            {this.handleDisplayType()}

        <div  className={`btn-parent ${this.state.open? "show": "hide"}`} onClick={this.handleClose}>
                <div
                    className={`btn-delete ${this.state.open? "show": "hide"}`}
                >
                        <h3> {this.props.title}</h3>

\                   <Button className="info" onClick={this.handleClose}>Cancel</Button>
                    <Button className="error" onClick={this.handleDelete}>Delete</Button>

                </div>
            </div>
                </>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    };
};


export default connect(
    mapStateToProps,
    {deleteReview}
)(withRouter(DeleteButton));