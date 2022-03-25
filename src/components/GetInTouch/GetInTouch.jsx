import React from 'react';
import Button from '../Button/Button';
import close from '../../assets/close-24px.svg'
import './GetInTouch.scss'
import Spa from '../../assets/spa.png';

export default class GetInTouch extends React.Component {
    render(){
        return(
            <>
            <div className="div">
                Yan's background here
            <div className="connect">
                {/* <img alt="Close X" src={close} onClick={this.props.handleClose}/> */}
                <div className="connect__top">
                    <div className="connect__top--header">Send Spa Essentials a message</div>
                    <div className="profile">
                        <div className="profile__avatar"><img src={Spa} alt="Spa" className="profile__avatar--img"/></div>
                        <div className="profile__text">
                            <h4 className="profile__text--title">Spa Essentials{this.props.vendorName}</h4>
                            <h5 className="profile__text--description">{this.props.information}The place to purchase all your spa essential needs. Ranging from equipment to fragrance oils, we offer</h5>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="connect__bottom">
                    <div className="connect__bottom--header">Let Spa Essentials know who you are</div>
                    <form action="submit">
                    <input className='productInput' type="text" name="productInput" placeholder='Send quotes, description or details about your product'></input>
                    </form>
                    <button className='productSubmit' alt="Send Message Button"onClick={this.props.handleClose}><h5 className='btn-text'>Send Message</h5></button>
                </div>
                
            </div>
            </div>
            </>
        )
    }
}