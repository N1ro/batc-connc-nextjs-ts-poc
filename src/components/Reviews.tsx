import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight, FaCircle, FaRegCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { reviews } from '../utils/constants';

const Reviews: React.FC = () => {
    const [people, setPeople] = useState(reviews);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 6000);
        return () => clearInterval(slider); //a new index creates another timer. This line clears out existing timer.
    }, [index]);

    return (
        <SliderContainer>
            <h2>What do our students say</h2>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <article className={position} key={id}>
                            <div>
                                <img src={image} alt={name} className="person-img" />
                            </div>
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
                <div className="breadcrumbs"></div>
            </div>
        </SliderContainer>
    );
};

const SliderContainer = styled.div`
    background-color: var(--clr-bcgrey);
    margin-top: 0px;
    padding-top: 2rem;
    padding-bottom: 1rem;

    h2 {
        text-align: center;
        color: var(--clr-primary-1);
        text-transform: uppercase;
    }
    .title span {
        font-size: 0.85em;
        color: var(--clr-primary-5);
        margin-right: 1rem;
        font-weight: 700;
    }
    .section-center {
        margin: 0 auto;
        /* margin-top: 4rem; */

        /* have to have a height */
        height: 450px;
        max-width: 800px;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .person-img {
        border-radius: 8px;
        /* margin-bottom: 1rem; */
        width: 360px;
        object-fit: cover;
    }
    article h4 {
        text-transform: uppercase;
        color: var(--clr-primary-5);
        margin-bottom: 0.25rem;
    }
    .title {
        text-transform: capitalize;
        margin-bottom: 0.75rem;
        color: var(--clr-grey-3);
    }
    .text {
        max-width: 35em;
        margin: 0 auto;
        margin-top: 2rem;
        line-height: 2;
        color: var(--clr-grey-5);
    }
    .icon {
        font-size: 3rem;
        margin-top: 1rem;
        color: var(--clr-primary-5);
    }
    .breadcrumbs {
        position: absolute;
        top: 380px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .prev,
    .next {
        position: absolute;
        bottom: 0;
        background: var(--clr-primary-1);
        color: var(--clr-white);
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        border-color: transparent;
        font-size: 1rem;
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);
    }

    .prev {
        left: 30%;
    }

    .next {
        right: 30%;
    }

    .prev:hover,
    .next:hover {
        background: var(--clr-primary-5);
    }

    @media (min-width: 992px) {
        h2 {
            text-align: left;
            margin-left: 4rem;
        }
        .text {
            max-width: 45em;
        }
        .prev,
        .next {
            width: 3rem;
            height: 3rem;
            font-size: 1.5rem;
            position: absolute;
            top: 200px;
            transform: translateY(-50%);
            background: var(--clr-primary-1);
            color: var(--clr-white);
            display: grid;
            place-items: center;
            border-color: transparent;
            font-size: 1rem;
            border-radius: var(--radius);
            cursor: pointer;
            transition: var(--transition);
        }
        .prev {
            left: 0;
        }
        .next {
            right: 0;
        }
        .breadcrumbs {
            top: 220px;
        }
        .person-img {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 420px;
        }
    }

    article {
        position: absolute;
        flex: 1;
        display: flex;
        flex-direction: column;
        top: 1rem;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: var(--transition);
    }
    article.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }
    article.lastSlide {
        transform: translateX(-100%);
    }
    article.nextSlide {
        transform: translateX(100%);
    }
`;

export default Reviews;
