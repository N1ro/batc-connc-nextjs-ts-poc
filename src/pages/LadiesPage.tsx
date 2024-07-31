// pages/LadiesPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import LadiesVideo from '../assets/ladies-dancing.mp4';
import { FaVolumeDown } from 'react-icons/fa';

const LadiesPage: React.FC = () => {
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
            <div className="content">
                <h2>Ladies Styling Classes</h2>
                <p>
                    Discover your inner goddess with our exclusive Ladies Styling Classes, designed to elevate your
                    dance persona and unleash your inner confidence. Dive into the rhythm of both LA Salsa and Bachata
                    as you refine your techniques and infuse your movements with your unique flair. Here's what you can
                    expect from our classes:
                </p>
                <p>
                    <b>
                        1. Confidence Building: Embrace your femininity and take center stage with poise and assurance.
                    </b>
                </p>
                <p>
                    <b>
                        2. Technique Refinement: Master the art of arm movements and flawless turns to dazzle on the
                        dance floor.
                    </b>
                </p>
                <p>
                    <b>
                        3. Musicality Enhancement: Feel the music like never before as you sync your steps seamlessly
                        with the beats.
                    </b>
                </p>
                <p>
                    <b>
                        4. Personality Unleashed: Express yourself authentically through movement, letting your true
                        self shine through.
                    </b>
                </p>
                <p>
                    Our classes run monthly, providing ongoing opportunities for growth and skill development. For those
                    wanting more or seeking personalised attention, private sessions are also available to tailor the
                    experience to your individual needs. Join us and discover the power of dance to transform not only
                    your skills but also your confidence and self-expression.{' '}
                </p>
            </div>
            <div className="videocontainer">
                <video src={LadiesVideo} autoPlay loop muted={sound} />
                <button className="control" onClick={handleSound}>
                    <FaVolumeDown />
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding-bottom: 2rem;
    padding-top: 1rem;
    display: block;
    background-color: var(--clr-bcgrey);

    h2 {
        text-align: center;
        margin: 0 auto;
        max-width: 1500px;
        display: block;
        color: var(--clr-primary-1);
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .content {
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem 1rem;
        padding: 0rem;
        color: #6b6b6b;
        line-height: 1.6;
    }
    video {
        width: 100%;
        height: 33vh;
        object-fit: cover;
        position: relative;
        background-size: cover;
        border-radius: 4px;
    }
    .videocontainer {
        position: relative;
        border-radius: 4px;
        padding: 0rem;
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
            border-radius: 4px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: var(--clr-bclghtgrey);
            padding: 2rem 1rem;
            margin: 1rem;
            padding-left: 2rem;
        }

        .content h2 {
            margin-left: 0;
            margin-bottom: 2rem;
        }

        .whyBCtalk {
            margin: 2rem auto;
            max-width: 1500px;
            display: flex;
        }

        h2 {
            text-align: left;
        }

        .videocontainer {
            padding: 1rem;
        }

        video {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
        }
    }
`;

export default LadiesPage;
