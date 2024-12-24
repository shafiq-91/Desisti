import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import HomeHeader from '../components/HomeHeader';
import Cart from '../components/Cart';

const cartItems = [
    {
        image: '/images/image1.png',
        title: 'Whitechapel Rd.',
        address: 'Tulare County, Los Angeles, CA 23415',
        price: '$1,456,654.00',
    },
    {
        image: '/images/image2.png',
        title: 'Baker St.',
        address: 'London, UK 12345',
        price: '$1,234,567.00',
    },
    {
        image: '/images/image3.png',
        title: 'Baker St.',
        address: 'London, UK 12345',
        price: '$1,234,567.00',
    },
    {
        image: '/images/image4.png',
        title: 'Baker St.',
        address: 'London, UK 12345',
        price: '$1,234,567.00',
    },
    {
        image: '/images/image5.png',
        title: 'Baker St.',
        address: 'London, UK 12345',
        price: '$1,234,567.00',
    },
    {
        image: '/images/image6.png',
        title: 'Baker St.',
        address: 'London, UK 12345',
        price: '$1,234,567.00',
    },
    // Add more items as needed
];

function Incidents() {
    return (
        <>
            <HomeHeader
                welcomeText="Home - Incidents - New Incident"
                titleText="New Incident"
                buttonText={
                    <Link to="/incidents/Manage-Incidents" className='flex gap-1'> {/* Add Link component for routing */}
                        <svg
                            width="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_1108)">
                                <path
                                    d="M8 3.33203L8 12.6654"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.33398 8L12.6673 8"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1108">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Manage Incidents
                    </Link>
                }
            />
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cartItems.map((item, index) => (
                    <Cart
                        key={index}
                        image={item.image}
                        title={item.title}
                        address={item.address}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}

export default Incidents;
