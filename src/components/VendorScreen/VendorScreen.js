import React from 'react';
import spaEssentials from '../../assets/spa.png';
import natureWorks from '../../assets/nature_works.png';
import somaFurniture from '../../assets/soma_furniture.png';
import './VendorScreen.scss';
import VendorCard from '../VendorCard/VendorCard';
import GetInTouch from '../GetInTouch/GetInTouch';

class VendorScreen extends React.Component {
  state = {
    showModal: false,
    messageSent: false
  }

  handleMessageSent = (event) => {
    event.preventDefault();
    this.setState({
      messageSent: true
    });
  }

  handleCloseModal = (event) => {
    event.preventDefault();
    this.setState({
      showModal: false
    })
  }

  handleShowModal = (image, vendorName, information) => {
    this.setState({
      showModal: true,
      image,
      vendorName,
      information,
    });
  }

  render() {
    const vendorList = [
      {
        image: spaEssentials,
        vendorName: 'Spa Essentials',
        information: 'The place to purchase all your spa essential needs. Ranging from equipment to fragrance oils, we offer'
      },
      {
        image: natureWorks,
        vendorName: 'Nature Works',
        information: 'Bath and shower delights. Find candles, soaps, bath bombs and more. All made with organic products'
      },
      {
        image: somaFurniture,
        vendorName: 'Soma Furniture',
        information: 'Minimal and modern furniture pieces for your home. Find frames and household needs to decorate your home.'
      }
    ];
    return (
      <div className="vendor-screen">
        {
          this.state.showModal && <GetInTouch image={this.state.image} vendorName={this.state.vendorName} information={this.state.information} handleConfirm={this.handleMessageSent} handleClose={this.handleCloseModal} />
          // <div className="vendor-screen__modal-placeholder">
          //   Show Modal
          // </div>
        }
        <div className="vendor-screen__list">
          {
            vendorList.map((vendor, index) => {
              return (
                <VendorCard
                  key={index}
                  image={vendor.image}
                  vendorName={vendor.vendorName}
                  information={vendor.information}
                  handleClick={() => { this.handleShowModal(vendor.image, vendor.vendorName, vendor.information) }}
                />
              );
            })
          }
        </div>
        {
          this.state.messageSent &&
          <div className="vendor-screen__confirmation">
            <p>Message Sent</p>
            <p>x</p>
          </div>
        }
      </div>
    );
  }
}

export default VendorScreen;
