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
                    <Image src ='/Paris.jpg' alt='hero' fill className='object-contain'/>
                </div>

            </div>
        </div>
    );
};

export default Hero

