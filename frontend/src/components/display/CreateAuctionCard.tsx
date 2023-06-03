import * as React from 'react';
import { FaPlus } from 'react-icons/fa'

const CreateAuctionCard = () => {
    return (
        <div className="card bg-black shadow-xl rounded-sm w-1/2 my-10 border-white">
            <div className="card-body text-white flex flex-col gap-4 justify-center">
                <div className="card-actions justify-center w-full">
                    <button className="btn btn-primary w-full flex flex-row gap-4">
                        <h2 className="card-title justify-center">Create an Auction</h2>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateAuctionCard;