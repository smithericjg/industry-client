import React, { Component } from 'react';
import './CancelScreen.scss';
import Modal from "../Modal/Modal";

export class CancelScreen extends Component {

    state = {
        showModal: false
      }
      showModal = () => {
        this.setState({ showModal: true });
      };
    
      closeModal = () => {
        this.setState({ showModal: false });
      };
    
  render() {
    console.log("CancelScreen");
    let modal = <></>;
    if (this.state.showModal) {
      modal = (
        <div className="modal__box">
            <Modal
            closeModal={this.closeModal}
            />
        </div>
      );
    }
    return (
      <div className="cancel-screen">
          
      </div>
    )
  }
}

export default CancelScreen