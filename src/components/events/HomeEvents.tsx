import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import Wrapper from './eventsWrapper';
import fallbackImage from '../../assets/fallback-img.jpg';

// Function to construct the image URL
const getImageUrl = (imageId) => `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;

// Function to load an image and return a promise
const loadImage = (src) =>
  new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('Image URL is undefined'));
      return;
    }
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
  });

const HomeEvents = () => {
    const [data, setData] = useState([]);
    const [events, setEvents] = useState([]);
    const [loadedData, setLoadedData] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [buttonText, setButtonText] = useState('Load more');
    const eventsGridRef = useRef(null); // Create a ref for the events grid
    const navigate = useNavigate(); // Hook for navigation


    useEffect(() => {
      fetch('/fetch-json')
        .then(response => response.json())
        .then(fetchedData => {
          if (Array.isArray(fetchedData)) {
            setData(fetchedData)
            setEvents(fetchedData.slice(0, 3));
            setLoadedData(true);

          } else {
            console.error('Fetched data is not an array:', fetchedData);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoadedData(false);
        });
    }, []);

    const loadMoreEvents = () => {
        if (buttonText === 'Load more' && events.length === 3) {
            // If currently showing initial 3 events, show 3 more events
            setEvents(data.slice(0, 6)); // Show 6 events
            setButtonText('See all events'); // Change button text to prompt for navigation

            // Scroll only when loading more events, not when navigating away
            // setTimeout(() => {
            //     const eventsPosition = eventsGridRef.current.getBoundingClientRect().top + window.pageYOffset;
            //     window.scrollTo({ top: eventsPosition, behavior: 'smooth' });
            // }, 0);
        } else if (buttonText === 'See all events') {
            // If button text is 'See all events', navigate to the events page
            navigate('/events');
        }
    };

    useEffect(() => {
        // Check all images for loading
        const checkImages = async () => {
          try {
            await Promise.all(
              data.map((event) => {
                const imageUrl = getImageUrl(event.imageId);
                return loadImage(imageUrl).catch((error) => {
                  console.error(error.message);
                  return fallbackImage;
                });
              })
            );
            setImagesLoaded(true);
          } catch (error) {
            console.error('Error loading some images:', error);
            setImagesLoaded(false);
          }
        };

        if (data.length > 0) {
          checkImages();
        }
    }, [data]);



    // const getImage = (id) => {
    //     const images = [image1, image2, image3, image4, image5, image6];
    //     // Simply return an image by modulo index to cycle through the available images
    //     return images[(id - 1) % images.length];
    // };

    return (
        <Wrapper>
            <h2>UPCOMING EVENTS</h2>
            {imagesLoaded && loadedData ? (
            <>
            <div className="events-grid" ref={eventsGridRef}>

                  {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <div className="event-image-container">
                            <a href={event.url} target="_blank">
                            <img src={`https://drive.google.com/thumbnail?id=${event.imageId}&sz=w1000`} alt="Event" className="event-image" />
                            </a>
                        </div>
                        <div className="event-info">
                            <h3 className="event-name">{event.name}</h3>
                            <div className="event-date-location">
                                <FiCalendar className="icon" />
                                <p className="event-date">{format(new Date(event.start_time), 'EEEE do MMMM, p')}</p>
                            </div>
                            <div className="event-date-location">
                                <FiMapPin className="icon" />
                                <p className="event-location">
                                    {event.place.name}, {event.place.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
              <div className="button-wrapper">
                  <button onClick={loadMoreEvents}>{buttonText}</button>
              </div>
            </>
            ): (
                  <Spinner />

                )
              }

        </Wrapper>
    );
};

export default HomeEvents;
