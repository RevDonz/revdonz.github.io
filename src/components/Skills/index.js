import React from 'react';
import {
    ReactLogo,
    BootstrapLogo,
    HtmlLogo,
    JavascriptLogo,
    TailwindLogo,
    PHPLogo,
    CSSLogo,
    CILogo,
    LaravelLogo,
    PythonLogo,
    GoLogo,
} from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Skills() {
    return (
        <div className='bg-dark-main font-poppins h-full' id='about'>
            <div className='container mx-auto px-10 lg:px-20 h-full py-10'>
                <div className='items-center w-full'>
                    <div className='bg-dark-second p-10 rounded-xl text-white'>
                        <div className='text-center pb-10'>
                            <span className='text-2xl font-semibold hover:text-violet-500 border-b-2 border-dark-second hover:border-violet-500 transition-all duration-300'>
                                What I've Learned
                            </span>
                        </div>
                        <div className='pb-5'>
                            <div className='text-left py-3'>
                                <span className='text-xl'>Language</span>
                            </div>
                            <div className='grid grid-flow-col grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={JavascriptLogo}
                                        className='mx-auto h-24'
                                        alt='Javascript Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Javascript</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={PHPLogo}
                                        className='mx-auto h-24 w-36'
                                        alt='PHP Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>PHP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <div className='text-left py-3'>
                                <span className='text-xl'>Frontend</span>
                            </div>
                            <div className='grid grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={HtmlLogo}
                                        className='mx-auto h-24'
                                        alt='HTML Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>HTML</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={CSSLogo}
                                        className='mx-auto h-24'
                                        alt='CSS Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>CSS</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={JavascriptLogo}
                                        className='mx-auto h-24'
                                        alt='Javascript Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Javascript</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={BootstrapLogo}
                                        className='mx-auto h-24'
                                        alt='Bootstrap Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Bootstrap</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={ReactLogo}
                                        className='mx-auto h-24'
                                        alt='React JS Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>React JS</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={TailwindLogo}
                                        className='mx-auto h-24 w-24'
                                        alt='Tailwind CSS Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Tailwind CSS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <div className='text-left py-3'>
                                <span className='text-xl'>Backend</span>
                            </div>
                            <div className='grid grid-flow-col grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={LaravelLogo}
                                        className='mx-auto h-24'
                                        alt='Laravel Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Laravel</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={CILogo}
                                        className='mx-auto pl-2 h-24 w-24'
                                        alt='CI Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Code Igniter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <div className='text-left py-3'>
                                <span className='text-xl'>Currently Learning</span>
                            </div>
                            <div className='grid grid-flow-col grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={PythonLogo}
                                        className='mx-auto h-24'
                                        alt='Python Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Python</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'>
                                    <LazyLoadImage
                                        src={GoLogo}
                                        className='mx-auto h-24'
                                        alt='Golang Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Golang</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
