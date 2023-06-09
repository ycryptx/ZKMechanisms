import { ReactNode, useEffect, useState } from 'react'
import { Flex, useColorModeValue, useColorMode, Spacer, Heading, Text } from '@chakra-ui/react'

import headerImage from 'assets/images/header.jpg';
import CreateAuctionCard from 'components/display/CreateAuctionCard'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  className?: string
}

const darkBg = {
  background: `url(${headerImage.src})`,
  backgroundSize: 'cover',
  height: '500px'
};

const lightBg = {
  backgroundColor: '#E5DCF7',
  height: '500px'
};

export function HeadingComponent(props: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [style, setStyle] = useState<any>(darkBg);

  useEffect(() => {
    if (colorMode === 'dark') {
      setStyle(darkBg);
    } else {
      setStyle(lightBg);
    }
  }, [colorMode]);

  return (
    <div className='relative w-full p-5 pt-20 sm:p-20' style={style}>
      <div className='w-full sm:w-3/4 flex flex-col gap-4'>
        <Heading
          className='text-5xl font-bold font-inter'
          color={useColorModeValue('#B04BFF', '#FFFFFF')}>
          Welcome to Gabozago.
        </Heading>
        <Text
          className='font-inter font-thin text-3xl'
          color={useColorModeValue('#B04BFF', '#FFFFFF')}>
          Explore advanced ZK art auctions and bid for your favorite pieces
        </Text>
        <CreateAuctionCard />
      </div>
      <div className='w-full h-[100px] absolute left-0 bottom-0 opacity-30'
        style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)" }} >
      </div>
    </div>

  )
}
