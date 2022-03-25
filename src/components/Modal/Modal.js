// modal
import React from 'react';
import "./Modal.scss"
import close from "../../assets/close-24px.svg";
import {Link} from 'react-router-dom';


export default class Modal extends React.Component {
    submitHandler = e => {
      e.preventDefault();

    }

    render (){
      console.log ('Modal');
        return(
          <>
            <div id="id01" className="modal">
            <form className="modal-content" onSubmit={this.submitHandler}>
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
                    Reach more sales by connecting with vendors
                  </h1>
                  <p className="modalContainer__text--sub">
                    Use Shopify vendors and instantly sell your product to existing businesses.
                  </p>
                </div>
                <div className="btn">
                 
                    <button
                        type="button"
                        className="cancelBtn"
                        onClick={this.props.closeModal}
                      >
                      Not for this product
                    </button>
                  
                  <button className='connectBtn'>
                    Find matching vendors
                  </button>
                </div>
              </div>
            </form>
          </div>
          </>
        )
    }
}