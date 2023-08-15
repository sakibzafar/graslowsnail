'use client'
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {}

    return (
        <div className='hero'>
            <div className='flex-1 pt-20 padding-x'>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image type='submit' priority='true' src='/Paris.jpg' alt='hero' fill className='object-fill'/>
                </div>
            </div>
        </div>
    );
};

export default Hero

