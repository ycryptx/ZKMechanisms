import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa'

const CreateAuctionCard = () => {
    return (
        <button className="btn flex flex-row gap-4 bg-color1 border-none w-full sm:w-1/4">
            <h2 className="justify-center font-inter text-white">Create an Auction</h2>
            <FaArrowRight className='text-white' />
        </button>
    );
};

export default CreateAuctionCard;