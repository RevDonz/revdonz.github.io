import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LaslesvpnIMG } from '../../assets'
import { FaGithub } from "react-icons/fa";


export default function Project() {
    return (
        <div className='bg-dark-main font-poppins h-full' id='project'>
            <div className='container mx-auto px-5 lg:px-20 h-full pb-10'>
                <div className='items-center w-full'>
                    <div className='bg-dark-second p-5 lg:p-10 rounded-xl text-white'>
                        <div className='text-center pb-10'>
                            <span className='text-2xl font-semibold hover:text-violet-500 border-b-2 border-dark-second hover:border-violet-500 transition-all duration-300'>
                                My Project
                            </span>
                        </div>
                        <div className='pb-5'>
                            <div className='grid grid-cols-1 gap-7 lg:grid-cols-2 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={LaslesvpnIMG}
                                        className='mx-auto rounded-lg filter'
                                        alt='LaslesVPN Screenshot'
                                    />
                                    <div className="justify-center space-x-5 flex items-center">
                                        <div className='mt-5 hover:text-violet-500 transition-all duration-300 text-2xl'>
                                            <a href="https://github.com/RevDonz/react-laslesvpn" target="blank"><FaGithub /></a>
                                        </div>
                                        <div className='mt-5 hover:text-violet-500 transition-all duration-300'>
                                            <a href="https://revdonz.github.io/react-laslesvpn/" target="blank">Lasles VPN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
