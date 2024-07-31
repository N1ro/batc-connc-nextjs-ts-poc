import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaClone } from "react-icons/fa";
import fb from '../assets/FB.png';
import insta from '../assets/Insta.png';
import wa from '../assets/Whatsapp.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Footer: React.FC = () => {
  const [copyValue, setCopyValue] = useState('support@bachataconnection.com');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => { setCopied(false) }, 2000);
    return () => {
      clearTimeout(timer1)
    }
  }, [copied])

  return (
    <FooterWrapper>
      <div className='main-section'>
        <div className='left-side'>
          <div className="footer-header">
            <h2>CONTACT US</h2>
          </div>
          <div className="content">
            <h3><b>support@bachataconnection.com</b></h3>
            <CopyToClipboard text={copyValue}>
              <button className={`control ${copied ? 'active' : ''}`} onClick={() => setCopied(!copied)}> <FaClone icon="fa-clone" /></button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="center-section">
          <div className="content">
            <ul className="social-links">
              <li>
                <StyledNavLink
                  to={"https://www.facebook.com/southcoastbachata"} target="_blank">
                  <img src={fb} />
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to={"https://www.instagram.com/bachata_connection"} target="_blank">
                  <img src={insta} />
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to={"https://wa.me/447845378590"} target="_blank">
                  <img src={wa} />
                </StyledNavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <ul className="nav-links">
              {links.map((link) => {
                const { id, text, url } = link
                return (
                  <li key={id}>
                    <StyledNavLink
                      to={url}
                      style={({ isActive }) =>
                        ({ fontWeight: isActive ? 'bold' : 'normal' })
                      }>
                      {text}
                    </StyledNavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="content">
          <h3>&copy; {new Date().getFullYear()}<span> Bachata Connection</span></h3>
        </div>
      </div>
    </FooterWrapper>
  );
}
const StyledNavLink = styled(NavLink)`
  color: var(--clr-primary-3);
  font-size: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0 2rem;
`;
const FooterWrapper = styled.footer`
  background: url('CUTBachataBackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem;
  text-align: center;
  color: var(--clr-white);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-header {
    margin-bottom: 2rem;
  }
  .left-side {
    display: flex;
    flex-direction: column;
    flex:1;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1rem;
  }
  .center-section {
    display: flex;
    justify-content: center;
    align-items: end;
    margin: 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin: 0;
  }
  .bottom-section {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    color: var(--clr-white);
  }
  h5, h2, h3 {
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  h3 {
  }
  ul {
  list-style-type: none;
  }
  .control {
    position: relative; /* Ensure the button is positioned relative to allow absolute positioning of the pseudo-element */
    background: transparent;
    color: #fff;
    font-size: 1rem;
    border: 1px solid #fff;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
  }
  @media (min-width: 884px) {
    display: flex;
    flex-direction: column;

    .content {
      /* display: flex;
      flex-direction: row;
      justify-content: center;
      align-items:center; */
    }

    .right-side {
      display: flex;
      flex-direction: row;
      justify-content: right;
      margin: 0;
    }
    .main-section {
      flex-direction: row;
    }
    .left-side {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin: 0;
    }
    .right-side {
      margin: 0;
    }
    .right-side .content {
      border-left: 1px solid white;
    }
    .center-section {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .main-section {
      display: flex;
      justify-content: space-between;
      margin: 0 4rem;
    }
    .footer-header {
      margin-bottom: 0rem;
    }
    .bottom-section {
      margin: 0;
    }
    .left-side .content {
      align-items: start;
    }
  }
  .nav-links {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px;
    li {
      margin: 0.5rem;
    }
    a {
      color: var(--clr-primary-3);
      font-size: 1.2rem;
      text-decoration: none;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0 2rem;
      /* &:hover {
        border-bottom: 2px solid var
