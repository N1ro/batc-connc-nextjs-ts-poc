import React from 'react';
import styled from 'styled-components';
import { faqs } from '../utils/constants';

const Faq: React.FC = () => {
    return (
        <Wrapper>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <div className="faq__list">
                {faqs.map((faq) => {
                    return (
                        <div className="faq" key={faq.id}>
                            <div className="faq__question">
                                <h3>{faq.question}</h3>
                            </div>
                            <div className="faq__answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};

export default Faq;

const Wrapper = styled.section`
    background-color: #000;
    display: block;
    margin-top: 0px;
    padding: 1rem;
    padding-top: 2rem;
    h2 {
        text-align: center;
        color: var(--clr-white);
        text-transform: uppercase;
    }
    h3 {
        text-align: center;
        color: var(--clr-primary-2);
        text-transform: uppercase;
        margin-left: 1rem;
        font-size: 2.5vh;
    }
    p {
        font-size: 2.5vh;
        color: var(--clr-white);
    }
    .faq__list {
        list-style: none;
        margin: 0;
        padding: 1rem 0;
        text-align: center;
        color: var(--clr-black);
        display: flex;
        flex-direction: column;
    }
    .faq {
        width: auto;
        display: flex;
        border-radius: 8px;
        border: none;
        flex-direction: column;
        margin: 1rem;
    }
    .faq__question {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 992px) {
        .faq__list {
            list-style: none;
            margin: 0;
            text-align: center;
            color: var(--clr-black);
            display: flex;
            padding: 4rem;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: row;
        }
        .faq {
            border-radius: 8px;
            flex: 0 1 30%; /* 3 partners per row on desktop view */
            width: auto;
            margin: 1rem;
        }
        h2 {
            text-align: left;
            margin-left: 4rem;
        }
        h3 {
            margin-left: 1rem;
            font-size: 3vh;
        }
        p {
            font-size: 2.5vh;
        }
    }
`;
