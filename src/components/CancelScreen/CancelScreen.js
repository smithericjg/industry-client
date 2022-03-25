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



      componentDidMount() {
          setTimeout(this.showModal, 1500);
      }
    
  render() {
    console.log("CancelScreen");
    let modal = <></>;
    if (this.state.showModal) {
      modal = (
        <div className="modal__screen-container">
            <div className="modal__box">
                <Modal
                closeModal={this.closeModal}
                />
            </div>
        </div>
      );
    }
    return (
      <div className="cancel-screen">
          {modal}
      </div>
    )
  }
}

export default CancelScreen