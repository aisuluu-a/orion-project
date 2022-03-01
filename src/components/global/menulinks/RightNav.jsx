import React from 'react';
import styled from 'styled-components';
import youtubeLogo from "../global-img/youtube.svg";
import facebookLogo from "../global-img/facebook.svg";
import telegramLogo from "../global-img/telegram.svg";

const Ul = 
styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-left: 1px solid $border-color;

  @media (max-width: 768px) {

    flex-flow: column nowrap;
    background-color: #d32a3d;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 50px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    .contact-menu, .social-links, ,.social-items {
        display: block;
        border-left: none;
        border-right: none;
    }
  }
  
`;


const RightNav = ({ open }) => {
  return (
    <Ul open={open} >
        
        <div className="contact-menu">
            <div className="social-links">
            <a href="/">
                <div className="social-items">
                <img src={youtubeLogo} alt="youtubeLogo" />
                </div>
            </a>

            <a href="/">
                <div className="social-items">
                <img src={facebookLogo} alt="facebookLogo" />
                </div>
            </a>

            <a href="/">
                <div className="social-items">
                <img src={telegramLogo} alt="telegramLogo" />
                </div>

            </a>
            </div>

            {/*<a  className="contacts" href="tel:+996312000000">+996 312 000 000</a>*/}

            <div className="contacts">
            <a className='contacts-item' href="tel:+996312000000">+996 312 000 000</a>
        </div>
       
    </div>
    </Ul>
  )
}

export default RightNav