// modal
import React from 'react';
import "./Modal.scss"
import close from "../assets/close-24px.svg";


export default class Modal extends React.Component {
    render (){
        return(
          <>
            <div id="id01" className="modal">
            <form className="modal-content" action="/action_page.php">
              <img
                src={close}
                onClick={this.props.closeModal}
                className="close"
                alt="Close Button"
                title="Close Modal"
              />
              <div className="modalContainer">
                <div className="modalContainer__text">
                  <h1 className="modalContainer__text--head">
                    SHOPIFY VENDORS
                  </h1>
                  <p className="modalContainer__text--sub">
                    WE USE NANO-TECH-SUPER-DUPER-ALGORITHMS TO SELL YOUR STUFF TO OTHER COMPANIES
                  </p>
                </div>
                <div className="btn">
                  <button
                    type="button"
                    className="cancelBtn"
                    onClick={this.props.closeModal}
                  >
                    Cancel
                  </button>
                  <button className='connectBtn'>
                    CONNECT
                  </button>
                </div>
              </div>
            </form>
          </div>
          </>
        )
    }
}