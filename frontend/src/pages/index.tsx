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
        <HeadingComponent as="h2">{SITE_NAME}</HeadingComponent>
        <Text className='mb-10'>{SITE_DESCRIPTION}</Text>

        <hr />
        <CreateAuctionCard />
        <hr />
        <div className='grid grid-cols-3 gap-4 mt-10'>
          {auctions.map((k: AuctionCardProps) => <AuctionCard key={k.id} {...k} />)}
        </div>

      </main>
    </>
  )
}
