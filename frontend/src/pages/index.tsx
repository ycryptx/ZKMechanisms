import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'

import { SITE_NAME, SITE_DESCRIPTION } from 'utils/config'

import AuctionCard from 'components/display/AuctionCard';
import CreateAuctionCard from 'components/display/CreateAuctionCard'
import { AuctionCardProps } from 'interfaces/index';
import { auctions } from './data'

export default function Home() {
  return (
    <>
      <Head />

      <main>
        <HeadingComponent />

        <div className='w-full h-[661px] absolute' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);"}} >

        </div>

        <div className='px-20'>
          <hr />
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10'>
            {auctions.map((k: AuctionCardProps) => <AuctionCard key={k.id} {...k} />)}
          </div>

        </div>


      </main>
    </>
  )
}
