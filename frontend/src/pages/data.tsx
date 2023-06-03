import * as react from 'react';
import { AuctionCardProps } from 'interfaces/index';

import reptile from 'assets/images/reptile.jpeg';
import img1 from 'assets/images/img1.png';
import img2 from 'assets/images/img2.png';
import img3 from 'assets/images/img3.png';
import img4 from 'assets/images/img4.png';
import img5 from 'assets/images/img5.png';
import img6 from 'assets/images/img6.png';
import img7 from 'assets/images/img7.png';
import img8 from 'assets/images/img8.png';
import img9 from 'assets/images/img9.png';
import img10 from 'assets/images/img10.png';

export const auctions: AuctionCardProps[] = [
    {
        id: 'r1',
        imgSrc: reptile.src,
        title: 'Biased Reptile',
        description: 'Get me my food!!'
    },
    {
        id: '1',
        imgSrc: img1.src,
        title: 'Florigasm bird',
        description: 'Where\'s the flowers at'
    },
    {
        id: '2',
        imgSrc: img2.src,
        title: 'Flower power 1',
        description: 'Experience the freshness!!'
    },
    {
        id: '3',
        imgSrc: img3.src,
        title: 'Flower power 2',
        description: 'Get me my food!!'
    },
    {
        id: '4',
        imgSrc: img4.src,
        title: 'Flower power 3',
        description: 'Get me my food!!'
    },
    {
        id: '5',
        imgSrc: img5.src,
        title: 'Flower power 4',
        description: 'Get me my food!!'
    },
    {
        id: '6',
        imgSrc: img6.src,
        title: 'Cloudy City',
        description: 'Get me my food!!'
    },
    {
        id: '7',
        imgSrc: img7.src,
        title: 'Flowery Cloud',
        description: 'Rain of flowers!!'
    },
    {
        id: '8',
        imgSrc: img8.src,
        title: 'Cityscapes Vertical',
        description: 'How tall am I'
    },
    {
        id: '9',
        imgSrc: img9.src,
        title: 'Cityscapes POV',
        description: 'Show me the way!!'
    },
    {
        id: '10',
        imgSrc: img10.src,
        title: 'Cityscapes',
        description: 'Hustle Bustle'
    },
];

const test = () => {
    return <div />
};
export default test;