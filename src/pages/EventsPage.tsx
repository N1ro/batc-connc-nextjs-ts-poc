// pages/EventsPage.tsx
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import classpass from '../assets/class-pass.jpg';
import loyal from '../assets/loyalty-card.jpg';
import fallbackImage from '../assets/fallback-img.jpg';
import Wrapper from '../components/events/eventsWrapper';
import Spinner from '../components/Spinner';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { getImage } from '../utils/helpers';

const getImageUrl = (imageId: string) => `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;

const loadImage = (src: string) =>
    new Promise<string>((resolve, reject) => {
        if (!src) {
            reject(new Error('Image URL is undefined'));
            return;
        }
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    });

const EventsPage: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loadedData, setLoadedData] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
    const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        fetch('/fetch-json')
            .then((response) => response.json())
            .then((fetchedData) => {
                if (Array.isArray(fetchedData)) {
                    setData(fetchedData);
                    setFilteredEvents(fetchedData);
                    setLoadedData(true);

                    const categories = [...new Set(fetchedData.map((event) => event.category))];
                    setUniqueCategories(categories);
                } else {
                    console.error('Fetched data is not an array:', fetchedData);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoadedData(false);
            });
    }, []);

    useEffect(() => {
        const filtered = data.filter((event) => {
            return (
                (!searchTerm || event.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (!category || event.category === category)
            );
        });
        setFilteredEvents(filtered);
    }, [searchTerm, category, data]);

    useEffect(() => {
        const checkImages = async () => {
            try {
                await Promise.all(
                    filteredEvents.map((event) => {
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

        if (filteredEvents.length > 0) {
            checkImages();
        }
    }, [filteredEvents]);

    return (
        <Wrapper>
            <div className="about-classes">
                <div className="desc-container">
                    <h2>About the Classes</h2>
                    <p>
                        At Bachata Connection we pride ourselves on being unique and introducing fresh, fascinating
                        concepts for our classes and events. We are passionate about dance and our mission is to share
                        its magic with everyone around the world!
                    </p>
                    <p>
                        Bachata Connection guides and encourages people of all abilities. Whether you are a
                        semi-professional dancer or just getting started, there is always something for you to learn
                        with our hands on approach. We believe that dance is not just about exercising - it is also
                        about creating a community of like-minded people. We love collaborating with local dance
                        teachers and promoters to create unforgettable events and sprinkle the enchantment of Bachata
                        dance far and wide, touching hearts across the globe.
                    </p>
                    <p>
                        To thank our students for their loyalty and commitment, we have introduced a special Bachata
                        Connection Loyalty Card. Every time you attend one of our classes, you collect a stamp. Once you
                        collect 8 stamps, you get a FREE CLASS on us as a reward. Additionally, we are offering our
                        students a 6 Class Pass that enables them to pre-pay for 6 classes. Both cards are available to
                        be acquired at any of Bachata Connection events.
                    </p>
                </div>
                <div className="img-container">
                    <img src={classpass} alt="Class pass" className="main-img" />
                    <img src={loyal} alt="Loyalty card" className="accent-img" />
                </div>
            </div>

            <div className="header-filters">
                <h2>Browse Classes and Events</h2>
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search by name...Type at least 4 characters"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        title="Type at least 4 characters to search"
                    />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select category...</option>
                        {uniqueCategories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {imagesLoaded && loadedData ? (
                <div className="events-grid">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="event-card">
                            <div className="event-image-container">
                                <a href={event.url} target="_blank">
                                    <img
                                        src={`https://drive.google.com/thumbnail?id=${event.imageId}&sz=w1000`}
                                        alt="Event"
                                        className="event-image"
                                    />
                                </a>
                            </div>
                            <div className="event-info">
                                <h3 className="event-name">{event.name}</h3>
                                <div className="event-date-location">
                                    <FiCalendar className="icon" />
                                    <p className="event-date">
                                        {format(new Date(event.start_time), 'EEEE do MMMM, p')}
                                    </p>
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
            ) : (
                <Spinner />
            )}
        </Wrapper>
    );
};

export default EventsPage;
