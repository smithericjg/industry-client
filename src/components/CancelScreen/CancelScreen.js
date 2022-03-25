import React, { Component } from 'react';
import './CancelScreen.scss';
import Modal from "../Modal/Modal";
import { Link } from 'react-router-dom'; 

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
          setTimeout(this.showModal, 1000);
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
        <Link to='/vendor'>
        <div className='cancel-screen__click-area' ></div>
        </Link>
        
          {modal}
      </div>
    )
  }
}

export default CancelScreen