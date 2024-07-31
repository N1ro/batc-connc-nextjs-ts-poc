import React from 'react';
import logo from '../assets/bc-horizontal-logo.png';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';

const Sidebar: React.FC = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext();

    const onCloseSidebar = () => {
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 0);
        closeSidebar();
    };

    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <Link className="main-header__brand" to="/">
                        <img src={logo} className="logo" alt="BC Logo" />
                    </Link>
                    <button className="close-btn" type="button" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    {links.map(({ id, text, url }) => (
                        <li key={id}>
                            <Link to={url} onClick={closeSidebar}>
                                {text}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link onClick={onCloseSidebar}> Contact Us</Link>
                    </li>
                </ul>
            </aside>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    text-align: center;
    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    .close-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        transition: var(--transition);
        cursor: pointer;
        color: var(--clr-red-dark);
        margin-top: 0.2rem;
    }
    .close-btn:hover {
        color: var(--clr-red-light);
    }
    .logo {
        justify-self: center;
        height: 25px;
    }
    ul {
        list-style-type: none;
    }

    .links {
        width: 90%;
        height: 80%;
        list-style: none;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li {
        margin: 1rem 0;
    }
    .links a {
        text-align: left;
        font-size: 1.5rem;
        text-transform: capitalize;
        text-decoration: none;
        list-style-type: none;
        padding: 1rem 1.5rem;
        color: var(--clr-white);
        transition: var(--transition);
        letter-spacing: var(--spacing);
    }

    .links a:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr-black);
        transition: var(--transition);
        transform: translate(-100%);
        z-index: -1;
    }
    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }
    .cart-btn-wrapper {
        margin: 2rem auto;
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

    @media screen and (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;

export default Sidebar;
