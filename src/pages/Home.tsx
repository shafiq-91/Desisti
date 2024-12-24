import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Cart from '../components/Cart'

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

function Home() {
    return (
        <div>
            <HomeHeader 
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
        </div>
    )
}

export default Home
