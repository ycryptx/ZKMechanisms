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

const IPFS = [
    {
        id: '1',
        ipfs: 'bafybeid2rh4dcckmsstcb5amatadkwfrodimexuahqf2ys6d4wyp63fneq',
    },
    {
        id: '2',
        ipfs: 'bafybeiffx4maztv6oixm4sp7qlqvrvepeg6qitniixptpbw5gwornqlgy4',
    },
    {
        id: '3',
        ipfs: 'bafybeieaym44lst7ru64v2shvi347qfev74elvkspozw3okuhohrvdomnu',
    },
    {
        id: '4',
        ipfs: 'bafybeidzhbkzke4nb3gjs3tnjys2zljnzo6ys7tjegympgwc3gnpzkww34',
    },
    {
        id: '5',
        ipfs: 'bafybeieb6t4q2viodkmjur4ekifc4rxxjtqqq46rbkqy4fpuv4jhsffg3i',
    },
    {
        id: '6',
        ipfs: 'bafybeige2mzhboqalbh2cqjtdz6oqxxswcgtu4kcn5c4ern2cyxizam3om',
    },
    {
        id: '7',
        ipfs: 'bafybeie4f7eczkeatniktn2cqtbs54ckar23dabvypghfslra2vpvwepsm',
    },
    {
        id: '8',
        ipfs: 'bafybeib2xzktn56apopeekzcwaxu2dmul7rynyaa4b7qgshmu2ky7j32ae',
    },
    {
        id: '9',
        ipfs: 'bafybeia7ysnj2oakmw7azlkcsxugyhxh3t2gt4c53chcpp5psdsc4iwmv4',
    },
    {
        id: '10',
        ipfs: 'bafybeibqgtsruwkzyazyzok5aaygd5zmb2bhprlswfykb7stqtkixoqzti',
    },
];

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