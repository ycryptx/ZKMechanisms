import * as React from 'react';

import { AuctionCardProps } from 'interfaces/index';

const AuctionCard = (props: AuctionCardProps) => {
    return (
        <div className="card bg-black shadow-xl rounded-sm border-white">
            <figure className='w-full h-3/4 border-b-2'>
                <img src={props.imgSrc} alt="Shoes" className='w-full h-full' />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-center w-full">
                    <button className="btn btn-primary w-full">Bid now</button>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;