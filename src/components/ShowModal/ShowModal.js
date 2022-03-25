import './App.scss';
import React from 'react';
import Modal from "../Modal/Modal";
import Button from '../Button/Button';

import { Component } from 'react'; 

export default class App extends Component {
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

    let modal = <></>;
    if (this.state.showModal) {
      modal = (
        <Modal
          closeModal={this.closeModal}
        />
      );
    }
    return (
      <>
        <Button className=""
          onClick={this.showModal}></Button>
        {modal}
      </>
    )
  }
}