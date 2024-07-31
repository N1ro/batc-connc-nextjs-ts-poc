import styled from 'styled-components';

export default styled.section`


    background-color: #EDEFF0;
    padding-bottom: 2rem;
    padding-top: 2rem;

    .img-container {
      display: flex;
      /* text-align: center; */
      overflow: hidden;

      flex-direction: column;
      position: relative;

    }

    .img-container img {
      margin: 1rem 0rem;
    }

    .desc-container {
      text-align: center;
    }

  h2 {
        text-align: center;
        color: var(--clr-primary-1);

        padding: 0;
    }

    .about-classes {
        display: grid;

        grid-template-columns: 1fr;
        padding: 0rem;
        gap: 3rem;
        margin: 1rem 1rem; // Match the side margins with the events grid

        h2 {
            margin-top: 0;
            color: #2e2e2e; // Slightly darker color for the heading
            color: var(--clr-primary-1);
        }
        p {
            color: #6b6b6b; // Lighter grey for paragraph text
            line-height: 1.6;
            margin-bottom: 0; // Remove any default margin
        }
    }

    .header-filters {

        row-gap: 1rem; /* Add space between stacked items */
        margin: 2rem 0rem;

        h2 {
            margin: 0;
            padding-right: 0rem; /* Add some padding if needed */
        }

        .filters {
          display: grid;
          margin: 2rem; // Adjust margin for smaller screens
            grid-template-columns: 1fr; /* Ensure filters stack on mobile */
            row-gap: 1rem; /* Add space between stacked filters */

            // You may want to wrap the search input and the select dropdown in individual divs for better control
            .search-box,
            .category-select {
                display: flex;
                align-items: center;
            }

            input[type='text'] {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            select {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }

    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem; // Increase the gap size for more space between the cards
        /* padding: 2rem; // Maintain padding on the sides */
        margin: 0 auto; // Center the grid in the container
        max-width: 1200px; // Max width to prevent stretching too far on larger screens

        @media (min-width: 1400px) {
            // Adjust this breakpoint as needed
            grid-template-columns: repeat(3, 1fr); // Fix the number of columns to 3 for larger screens
            max-width: none; // Allow the grid to use the full width of its container
            justify-content: center; // Center the grid items in the grid area
            padding: 0 8rem; // Increase padding on the sides if necessary
            gap: 4rem;
        }
    }

    .event-card {
        background: #fff;
        /* border-radius: 10px; */
        /* box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1); */
        overflow: hidden;
        margin-bottom: 2rem;
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
             box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
        }

        .event-image-container {
            width: 100%;
            padding-top: 56.25%; // 16:9 Aspect Ratio
            position: relative;
        }

        .event-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .event-info {
            padding: 1rem;

            .event-name {
                color: #000;
                margin: 0.5rem 0;
                font-weight: bold;
            }

            .event-date-location {
                display: flex;
                align-items: center;
                margin: 0.5rem 0;

                .icon {
                    margin-right: 0.5rem;
                    color: var(--clr-primary-2);
                }

                p {
                    color: #000;
                    margin: 0;
                }
            }
        }
    }

    .button-wrapper {
        text-align: center;
        margin-top: 0rem;

        button {
            background-color: var(--clr-primary-1);
            color: #fff;
            border-radius: 8px;
            border: none;
            padding: 0.75rem 2.5rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
            /* &:hover {

            } */
        }
    }
    @media (min-width: 35rem) {
      .img-container {
        display: flex;
        /* text-align: center; */
        overflow: hidden;

        flex-direction: row;
        position: relative;


      }
      .img-container img {
        max-height: 200px;
        padding: 1rem;
      }
    }


    @media (min-width: 40rem) {

        .desc-container {
          text-align: left;
        }
        .header-filters {
            margin: 2rem 4rem; /* Adjust the margins as needed */
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;


        .filters {
          display: grid;
          grid-template-columns: 2fr 1fr; /* Changed from flex to grid */
          column-gap: 1rem; /* This will add space between the input fields */
          align-items: center;
          padding-right: 2rem;

        }

        /* .events-grid {

            gap: 4rem; // Increase the gap size for more space between the cards
            padding: 0 4rem;
        } */



        h2 {
            text-align:;
            text-transform: none;
            margin-left: 0;
            vertical-align: center;
            color: var(--clr-primary-1);

        }
      }

      .img-container {
        display: flex;
        flex-direction: row;
        position: relative;
        max-height: 300px;
        margin: auto
      }

      h2 {
        margin-left: 4rem;
        margin-bottom: 2rem;
      }


      .event-card {
        border: 3px solid var(--clr-primary-2);
        border-radius: 10px;
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
        cursor: pointer;

      }

      .event-card {
        transition: transform 0.3s ease;
      }

      .event-card :hover {

      }
        .about-classes {
          background: #f9f9f9;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 4px; // Adjusted for softer corners
          text-align: left;
          padding: 2rem 1rem;
        }

        .about-classes {
            h2 {
              margin-left: 1rem;
              margin-bottom: 2rem;
            }
            p {
              margin-left: 1rem ;
            }
        }

    }

    @media (min-width: 992px) {
      h2 {
          margin-left: 4rem ;
          text-align: left;
      }

      .events-grid {
        padding: 0rem 2rem;
      }


    }

    @media (min-width: 76rem) {

      .img-container {
        display: block;
        position: relative;
        max-height: 300px;
        overflow: visible;


      }
      .main-img {
        width: 330px;
        height: 228px;
        position: relative;
        border-radius: var(--radius);
        display: block;
        object-fit: cover;
      }
      .accent-img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 250px;
        transform: translateX(-50%);
        border-radius: var(--radius);
      }
      .img-container::before {
        content: '';
        position: absolute;
        width: 10%;
        height: 80%;
        background: var(--clr-primary-1);
        opacity: 50%;
        bottom: 0%;
        left: -8%;
        border-radius: var(--radius);
      }
      .about-classes {
        grid-template-columns: 4fr 1fr;
        gap: 8rem;

      }

    }
`;
