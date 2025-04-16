import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

import './styles.css'
import ShowDemo from '../ShowDemo'

function Hero() {
    return (
        <React.Fragment>
            <div className='flex flex-col-reverse items-center gap-4 py-16 md:py-22 md:flex-row'>
                <div className='flex-1/2 h-full flex flex-col justify-center items-between gap-3 z-10 px-4'>
                    <div className='w-fit flex'>
                        <span className='w-full text-8xl font-honk mb-2 typewriter'>
                            trueMD5
                        </span>
                    </div>
                    <p className='text-3xl font-bold font-montserrat text-black'>
                        Your Trusted File Integrity Validator!
                    </p>
                    <p className='text-lg font-montserrat text-cs-gray'>
                        Verify your files with 100% local, secure MD5 checksum checks. No uploads. No privacy concerns.
                    </p>
                    <div className='flex flex-row gap-3 mt-4'>
                        <Link
                            href={'/verify-md5'}
                            className='flex items-center gap-2 px-4 py-2 font-poppins text-md bg-cs-blue text-white font-normal rounded-4xl cursor-pointer'
                        >
                            <p>Start Verifying</p>
                            <FaArrowRight />
                        </Link>
                        <ShowDemo />
                    </div>
                </div>
                <div className='flex-1/2 mt-8 md:mt-0'>
                    <Image
                        src={'/assets/landing.svg'}
                        width={400}
                        height={400}
                        className='w-9/12 h-9/12 mx-auto p-4' alt='HeroSvg'
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero