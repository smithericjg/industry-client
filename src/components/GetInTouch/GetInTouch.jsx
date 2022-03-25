import React from 'react';
import Button from '../Button/Button';
import close from '../../assets/close-24px.svg'
import './GetInTouch.scss'
import Spa from '../../assets/spa.png';
import globe from '../../assets/globe_major.png'

export default class GetInTouch extends React.Component {
    render() {
        return (
            <div className="div">
                <div className="connect">
                    <img alt="Close X" className='closeX' src={close} onClick={this.props.handleClose}/>
                    <div className="connect__top">
                        <div className="connect__top--header">Send <span>{this.props.vendorName}</span> a message</div>
                        <div className="profile">
                            <div className="profile__avatar"><img src={Spa} alt="Spa" className="profile__avatar--img" /></div>
                            <div className="profile__text">
                                <h4 className="profile__text--title">{this.props.vendorName}<img className='globeIcon' src={globe} alt="Globe Icon" /></h4>
                                <h5 className="profile__text--description">{this.props.information}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="connect__bottom">
                        <div className="connect__bottom--header">Let {this.props.vendorName} know who you are</div>
                        <form action="submit">
                            <textarea className='productInput' name="productInput" placeholder='Send quotes, description or details about your product' />
                        </form>
                        <button className='productSubmit' alt="Send Message Button" onClick={this.props.handleConfirm}><h5 className='btn-text'>Send Message</h5></button>
                    </div>
                </div>
            </div>
        )
    }
}