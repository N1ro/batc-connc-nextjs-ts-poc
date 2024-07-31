import React, {useRef} from 'react'
import styled from 'styled-components'
import logo from '../assets/bc-horizontal-logo.png'
import { FaBars } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'

const Navbar = () => {

  const {openSidebar}= useProductsContext()
  const footerRef = useRef(null); // Create a ref for the events grid

  const scrollToBottom = () => {
    console.log(document.body.offsetHeight)
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    },0)
  }


  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link className="main-header__brand" to='/'>
            <img src={logo} alt='BC' />

          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          { links.map((link) => {
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
          <div className="nav-contact">
            <Link onClick={scrollToBottom}> Contact Us</Link>
          </div>
      </div>
  </NavContainer>
  )

}

//onClick={openSidebar}

const StyledNavLink = styled(NavLink)`
  color: var(--clr-primary-3);
  font-size: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem;

  &:hover {
    border-bottom: 2px solid var(--clr-primary-2);
  }
`;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('CUTBachataBackground.png');
  background-size: cover;
  /* background-position: left 10% bottom 20%; */
  background-repeat: no-repeat;
  background-origin: border-box;
  background-clip: border-box;
  /* width: 100vw;
  height: 50vh; */
  position: relative;


  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* img {
      height: 25px;
      margin-left: -15px;
    } */
  }
  .nav-contact {
    border: 1px sold var(--clr-white);
    border-radius: 8px;
  }
  .main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    vertical-align: middle;
  }
  .main-header__brand img {
    height: 2.5rem;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-white);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  ul {
  list-style-type: none;
  }
  .nav-links, .nav-contact {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-contact,
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1rem;
      }
      a {
        color: var(--clr-primary-3);
        font-size: 1.2rem;
        text-decoration: none;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        /* &:hover {
          border-bottom: 2px solid var(--clr-primary-2);
        } */
      }
    }
    .nav-contact {
      border: 1px solid var(--clr-white);
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`


export default Navbar
