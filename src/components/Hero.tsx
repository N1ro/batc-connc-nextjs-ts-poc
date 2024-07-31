import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import videoBg from '../assets/landing-hero-short.mp4';
import slogan from '../assets/learn_dance_connect_nobg.png';

const Hero: React.FC = () => {
    const navigate = useNavigate(); // Hook for navigation

    const routeChange = () => {
        let path = `why`;
        navigate(path);
    };

    const scrollToBottom = () => {
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 0);
    };

    return (
        <Wrapper>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted playsInline></video>
            <div className="control">{/* <h1> sound</h1>*/}</div>
            <div className="content">
                <section id="slogan">
                    <img src={slogan} alt="slogan" />
                </section>
                <div className="btnContainer">
                    <button onClick={routeChange} className="btn">
                        Who are we?
                    </button>
                    <button onClick={scrollToBottom} className="btn2">
                        Ask us anything
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    height: calc(100vh - 5rem);
    /* height: 100vh; */

    .control {
        position: absolute;
        top: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .content {
        position: absolute;
        width: 100%;
        height: 80%;
        top: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .btnContainer {
    }
    .overlay {
        position: absolute;
        top: 5rem;
        left: 0;
        width: 100%;
        height: 66vh;
        background-color: rgba(0, 0, 0, 0);
    }
    .BCVideo {
        /* background: url('BCShortVideo.gif'); */
        background-size: cover;
        /* background-position: left 10% bottom 20%; */
        background-repeat: no-repeat;
        background-origin: border-box;
        background-clip: border-box;
        width: 100vw;
        background-position: center;
        height: calc(100vh - 5rem);
        height: 100vh;
    }
    video {
        width: 100%;
        height: 33vh;
        height: calc(100vh - 5rem);
        /* height: 100vh; */
        object-fit: cover;
    }
    .BCBackground {
        background: url('CUTBachataBackground.png');
        background-size: cover;
        /* background-position: left 10% bottom 20%; */
        background-repeat: no-repeat;
        background-origin: border-box;
        background-clip: border-box;
        width: 100vw;
        height: 50vh;
        position: relative;
    }
    #dancer1 img {
        position: absolute;
        bottom: 0%;
        left: 1%;
        height: 10rem;
    }
    #dancer2 img {
        position: absolute;
        bottom: 0%;
        right: -0%;
        height: 12rem;
    }
    #slogan {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #slogan img {
        height: 12vh;
    }
    .content button {
        background-color: transparent;
        height: 4rem;
        color: #fff;
        text-decoration: none;
        border: 2px solid var(--clr-primary-2);
        font-size: 1rem;
        margin: 1rem;
        border-radius: 8px;
        cursor: pointer;
        width: 10rem;
    }
    .content .btn2 {
        background-color: #fff;
        height: 4rem;
        color: #000;
        text-decoration: none;
        border: 2px solid var(--clr-primary-2);
        font-size: 1rem;
        margin: 1rem;
        opacity: 80%;
    }
    #cta {
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 667px) {
        #dancer1 img {
            height: 15rem;
        }
        #dancer2 img {
            height: 20rem;
        }
        #slogan img {
            height: 20vh;
        }
    }
    @media (min-width: 992px) {
        /* grid-template-columns: 1fr 1fr;
    gap: 8rem; */
        #slogan img {
            height: 30vh;
        }
        #dancer1 img {
            height: 20rem;
        }
        #dancer2 img {
            height: 25rem;
        }
        .BCBackground {
            background: url('CUTBachataBackground.png');
            background-size: cover;
            /* background-position: left 10% bottom 20%; */
            background-repeat: no-repeat;
            background-origin: border-box;
            background-clip: border-box;
            width: 100vw;
            height: 50vh;
            position: relative;
        }
        .BCVideo {
            /* background: url('BCShortVideo-higher.gif'); */
            background-size: cover;
            /* background-position: left 10% bottom 20%; */
            background-repeat: no-repeat;
            background-origin: border-box;
            background-clip: border-box;
            width: 100vw;
            height: 50vh;
            background-position: center;
            /* height: 100vh; */
            height: calc(100vh - 5rem);
        }
        h1 {
            margin-bottom: 2rem;
        }
        p {
            font-size: 1.25rem;
        }
    }
`;

export default Hero;
