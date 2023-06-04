import { Flex, useColorModeValue, Image, Spacer, Heading, Text, Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { auctions } from '../data';
import { useEffect, useState } from 'react';

const Bid = () => {
    const [auction, setAuction] = useState<any>({});
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        const auc = auctions.find((k: any) => {
            return k.id == id;
        });
        setAuction(auc);
    }, [id]);

    return (
        <div className='w-full p-5 pt-20 sm:p-20' >
            <Heading
                className='text-5xl font-bold font-inter mb-10'
                color={useColorModeValue('#B04BFF', '#FFFFFF')}>
                Bid On Auction {id}
            </Heading>
            <div className='flex flex-col sm:flex-row gap-20'>
                <div className='w-full sm:w-1/2'>
                    <Image src={auction?.imgSrc}/>
                </div>
                <div className='w-full sm:w-1/2 flex flex-col gap-4'>
                    <Text
                        className='text-2xl font-bold font-inter'
                        color={useColorModeValue('#B04BFF', '#FFFFFF')}>
                        Bid an Amount
                    </Text>
                    <Input placeholder='Enter bid amount' />
                    <Button colorScheme='teal' size='lg' className='w-full sm:w-1/2'>
                        Bid Amount
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Bid;