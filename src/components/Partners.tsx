import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { partners } from '../utils/constants';
import Spinner from './Spinner';

const Partners = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        console.log(partners);
    }, []);

    useEffect(() => {
        const loadImage = (src) =>
            new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = () => reject(src);
            });

        const imageUrls = partners.map((partner) => partner.url);
        Promise.all(imageUrls.map((image) => loadImage(image)))
            .then(() => setImagesLoaded(true))
            .catch((err) => console.error('Error loading images:', err));
    }, []);

    if (!imagesLoaded) {
        return <Spinner />;
    }
    console.log(imagesLoaded);

    return (
        <Wrapper>
            <h2>PARTNERS</h2>
            <div className="partner__list">
                {partners.map((partner) => {
                    return (
                        <div key={partner.id} className="partner">
                            <img src={partner.url} alt="partner" className="partner__image" />
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: #000;
    display: block;
    margin-top: 0rem;
    padding: 16px;
    padding-top: 2rem;

    h2 {
        text-align: center;
        color: var(--clr-white);
        text-transform: uppercase;
    }

    .partner__list {
        list-style: none;
        margin: 0;
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .partner {
        height: 196px;
        width: 196px;
        margin: 1rem;
        flex: 1 1 calc(50% - 2rem); /* 2 partners per row on mobile view, accounting for margin */
        text-align: center;

        @media (min-width: 768px) {
            flex: 1 1 calc(33.333% - 2rem); /* 3 partners per row on tablet view */
        }

        @media (min-width: 1200px) {
            flex: 1 1 calc(25% - 2rem); /* 4 partners per row on desktop view */
        }
    }

    @media (max-width: 991px) {
        .partner:nth-child(odd):last-child {
            flex: 1 1 100%; /* Center the last partner if odd number of partners on mobile view */
        }
    }

    .partner__image {
        width: 100%;
        border: none;
        object-fit: contain;
        height: 100%;
        margin: 0rem;
        padding: 0px;
        display: inline-block;
    }

    @media (min-width: 992px) {
        .partner__list {
            padding: 4rem;
        }
        h2 {
            text-align: left;
            margin-left: 4rem;
            color: var(--clr-white);
        }
    }
`;

export default Partners;
