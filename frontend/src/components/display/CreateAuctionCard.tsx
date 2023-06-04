import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from '@chakra-ui/react'

const CreateAuctionCard = () => {
    return (
        <Link href='/createauction' className='no-underline'>
        <button className="btn flex flex-row gap-4 bg-color1 border-none w-full sm:w-1/4">
            <h2 className="justify-center font-inter text-white">Create an Auction</h2>
            <FaArrowRight className='text-white' />
        </button>
        </Link>
    );
};

export default CreateAuctionCard;