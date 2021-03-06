import React, { Component } from 'react';
import './InitialScreen.scss';
import Modal from "../Modal/Modal";
import Button from '../Button/Button';
import {Link} from 'react-router-dom';


export class InitialScreen extends Component {

    // state = {
    //     showModal: false
    //   }
    //   showModal = () => {
    //     this.setState({ showModal: true });
    //   };
    
    //   closeModal = () => {
    //     this.setState({ showModal: false });
    //   };
    
  render() {
    console.log("InitialScreen")
    // let modal = <></>;
    // if (this.state.showModal) {
    //   modal = (
    //     <div className="modal__box">
    //         <Modal
    //         closeModal={this.closeModal}
    //         />
    //     </div>
    //   );
    // }
    return (
      <div className="initial-screen">
            <Link to="/save">
              <Button className="initial-screen__save-button"
                onClick={this.showModal}></Button>
                {/* {modal} */}
            </Link>
      </div>
    )
  }
}

export default InitialScreen