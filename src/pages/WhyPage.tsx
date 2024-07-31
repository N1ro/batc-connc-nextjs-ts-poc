// pages/WhyPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import BCWhyVideo from '../assets/BCWhy.mp4';
import jamie from '../assets/jamie.jpeg';
import julia from '../assets/julia.jpeg';
import andy from '../assets/andy-b.jpeg';
import { FaVolumeDown } from 'react-icons/fa';

const WhyPage: React.FC = () => {
    const [sound, setSound] = useState('muted');

    const handleSound = () => {
        if (sound === 'muted') {
            setSound('');
        } else {
            setSound('muted');
        }
    };

    return (
        <Wrapper>
            <div className="whyBCtalk">
                <div className="content">
                    <h2>Why learn Bachata</h2>
                    <p>Here, Julia and Andy talk about about why you should start learning Bachata.</p>
                </div>
                <div className="videocontainer">
                    <video src={BCWhyVideo} autoPlay loop muted={sound} />
                    <button className="control" onClick={handleSound}>
                        <FaVolumeDown />
                    </button>
                </div>
            </div>
            <h2>Learn about our amazing dance instructors and what they can offer...</h2>
            <div className="teachers-left">
                <div className="teachers__image-container">
                    <img src={julia} alt="Julia - Teacher" className="teachers__image" />
                </div>
                <div className="teachers___info">
                    <h1 className="teacher__name">Julia Sulimenko</h1>
                    <p>
                        My passion for dancing has initiated when I was very little and since then it has been
                        continuously growing and evolving. I have learnt various dance styles throughout my dance career
                        such as Contemporary, Latin ballroom, Argentine Tango, Belly dance but my heart lies with Salsa,
                        Bachata and Latin Music. I have been teaching and performing for many years and in January 2023
                        I decided to create Bachata Connection - an ultimate destination for all things Bachata. I have
                        become one of the local Bachata Ambassadors, sharing my love for Bachata and organising dance
                        events around the South coast of England. I love what I do - dance is what improves my mood and
                        gives an energy boost. I cannot imagine my life without it!
                    </p>
                </div>
            </div>
            <div className="teachers-right">
                <div className="teachers__image-container">
                    <img src={andy} alt="Andy - Teacher" className="teachers__image" />
                </div>
                <div className="teachers___info">
                    <h1 className="teacher__name">Andy Barnetson</h1>
                    <p>
                        My name is Andy and I am one of the Bachata Connection founders and teachers. I love teaching
                        and it is rewarding to see students' progress and development. I have been dancing for many
                        years; I started with Salsa and continued my dance journey, mastering Sensual Bachata. Dancing
                        became an important part of my life - it is great for socialising as well as helps with stress
                        and anxiety.
                    </p>
                </div>
            </div>
            <div className="teachers-left">
                <div className="teachers__image-container">
                    <img src={jamie} alt="Jamie - Teacher" className="teachers__image" />
                </div>
                <div className="teachers___info">
                    <h1 className="teacher__name">Jamie Mannering</h1>
                    <p>
                        My name is Jamie and teaching Bachata is my passion. I lived in Egypt to improve my dancing
                        ability and knowledge. I have also danced in different festivals all over the world and taught
                        in different countries such as Malta and Egypt. I started teaching with Bachata Connection and
                        the community we are building is amazing and I love absolutely everything we do!
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding-bottom: 2rem;
    padding-top: 2rem;
    background-color: var(--clr-bcgrey);

    h2 {
        text-align: center;
        margin: 0 auto;
        max-width: 1500px;
        display: block;
        color: var(--clr-primary-1);
        margin-bottom: 1rem;
    }

    .content {
        display: block;
        margin: 1rem 1rem;
        border-radius: 4px;
    }

    .content p {
        color: #6b6b6b;
        line-height: 1.6;
        margin-bottom: 0;
    }

    .whyBCtalk {
    }

    video {
        width: 100%;
        height: 33vh;
        object-fit: cover;
        position: relative;
        background-size: cover;
    }
    .teachers__image-container {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
    }
    .teachers__image {
        width: 100%;
        vertical-align: top;
    }
    .teachers___info {
        text-align: right;
        padding: 0.9rem;
        display: inline-block;
    }

    .teachers___info p {
        color: #6b6b6b;
        line-height: 1.6;
        margin-bottom: 0;
    }
    .teachers-right {
        margin-bottom: 2rem;
    }

    .teachers-left {
        margin-bottom: 2rem;
    }
    .teachers-container {
        background-color: var(--clr-bclghtgrey);
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .teacher__name {
        margin: 0.2rem;
        color: var(--clr-primary-1);
        font-size: 2rem;
    }

    .teachers-right > .teachers___info {
        text-align: left;
    }

    .videocontainer {
        position: relative;
        width: 100%;
        margin-bottom: 1rem;
    }
    .control {
        position: absolute;
        bottom: 2%;
        left: 0%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        padding: 5px 15px;
        cursor: pointer;
        margin: 0 0.5rem;
    }

    @media (min-width: 40rem) {
        .content {
            margin: 1rem 0rem;
            border-radius: 4px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: var (--clr-bclghtgrey);
            padding: 2rem;
        }

        .content h2 {
        }

        .whyBCtalk {
            max-width: 1500px;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            margin: 0rem auto;
        }

        .content p {
            padding: 0;
        }

        h2 {
            max-width: 1500px;
            display: flex;
        }

        video {
            width: 100%;
            height: 66vh;
            object-fit: cover;
            box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
            border-radius: 4px;
        }

        .teachers-left {
            margin: 3rem auto;
            max-width: 1500px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        .teachers__image-container {
            display: inline-block;
            vertical-align: middle;
            width: 30rem;
            box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
        }

        .teachers__image {
            width: 100%;
            vertical-align: top;
        }
        .teacher__name {
            margin: 0.2rem;
            color: var(--clr-primary-1);
            font-size: 2rem;
        }

        .teachers___info {
            text-align: right;
            padding: 0.9rem;
            display: inline-block;
            width: 40rem;
            padding: 2rem;
            border-radius: 4px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: var(--clr-bclghtgrey);
            margin: 1rem;
        }
        .teachers-right {
            margin: 3rem auto;
            max-width: 1500px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        .teachers-right > .teachers___info {
            text-align: left;
        }
    }
`;

export default WhyPage;
