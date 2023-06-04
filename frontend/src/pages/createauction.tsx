import { Flex, useColorModeValue, Image, Spacer, Heading, Text, Input, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer: any = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb: any = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner: any = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img: any = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const CreateAuction = () => {
    const [files, setFiles] = useState<any>([]);
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        maxFiles: 1,
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map((file: any) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <div className='w-full p-5 pt-20 sm:p-20' >
            <Heading
                className='text-5xl font-bold font-inter mb-10'
                color={useColorModeValue('#B04BFF', '#FFFFFF')}>
                Create an Auction
            </Heading>
            <div className='flex flex-col sm:flex-row gap-20 justify-between'>
                <div className='w-full sm:w-1/2'>
                    <Text
                        className='text-2xl font-bold font-inter'
                        color={useColorModeValue('#B04BFF', '#FFFFFF')}>
                        Add an NFT
                    </Text>
                    <section className="w-full">
                        <div {...getRootProps({ className: 'dropzone' })}
                            className='flex flex-col justify-center items-center bg-white h-[200px] cursor-pointer'>
                            <input {...getInputProps()} />
                            <p className='text-black font-inter font-bold text-center'>
                                Drag 'n' drop some files here, or click to select files
                            </p>
                        </div>
                        <aside style={thumbsContainer}>
                            {thumbs}
                        </aside>
                    </section>
                    <Button colorScheme='teal' size='lg' className='w-full sm:w-1/2'>Create NFT</Button>
                </div>
                <div className='w-full sm:w-1/2 flex flex-col gap-4'>
                    <Text
                        className='text-2xl font-bold font-inter'
                        color={useColorModeValue('#B04BFF', '#FFFFFF')}>
                        Commit an Amount for Auction
                    </Text>
                    <Input placeholder='Enter commit amount' />
                    <Button colorScheme='teal' size='lg' className='w-full sm:w-1/2'>Commit Amount</Button>
                </div>
            </div>
        </div>
    )
};

export default CreateAuction;