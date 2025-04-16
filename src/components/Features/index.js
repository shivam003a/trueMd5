'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { features } from '@/helpers'
import './styles.css'

function Features() {
    const [activeTile, setActiveTile] = useState(0)

    return (
        <React.Fragment>
            <div className='w-full flex flex-col items-center justify-between mb-10'>
                <span className='text-4xl font-bold my-10'>Features</span>
                <div className='w-full flex items-center justify-center p-4'>
                    <div className='flex-1/10 flex flex-col md:flex-3/10'>
                        {
                            features?.length > 0 && features?.map((feature, index) => (
                                <span key={index} className={`p-5 pl-10 rounded-l-4xl font-poppins text-sm cursor-pointer ${index === activeTile ? 'bg-blue-100 text-cs-blue' : 'bg-white'}`}
                                    onClick={(e) => setActiveTile(index)}
                                >{feature?.title}</span>
                            ))
                        }
                    </div>
                    <div className={`flex-7910 md:flex-7/10 self-stretch bg-blue-100 min-h-full flex rounded-r-xl overflow-hidden rounded-l-xl ml-[-8px]`}>
                        <div className='flex-1/2 flex flex-col gap-6 p-4'>
                            <span className='text-4xl text-white font-bold capitalize text-image'>{
                                features[activeTile]?.subtitle?.split(' ')?.map((ele, i) => (
                                    <div key={i}>{ele}</div>
                                ))
                            }</span>
                            <span className='font-poppins text-lg font-light text-cs-blue'>{features[activeTile]?.description}</span>
                        </div>
                        <div className='flex-1/2 invisible md:visible'>
                            <Image src={features[activeTile]?.image} width={400} height={400} className='w-full h-full overflow-hidden object-cover aspect-square' alt='featureImage' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Features