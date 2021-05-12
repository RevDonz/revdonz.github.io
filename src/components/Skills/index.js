import React from 'react';
import {
    ReactLogo,
    BootstrapLogo,
    HtmlLogo,
    JavascriptLogo,
    TailwindLogo,
    PHPLogo,
    CSSLogo,
    NodeLogo,
    PythonLogo,
    GoLogo,
} from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Skills() {
    return (
        <div className='bg-dark-main font-poppins h-full' id='about'>
            <div className='container mx-auto px-5 lg:px-20 h-full py-10'>
                <div className='items-center w-full'>
                    <div className='bg-dark-second p-5 lg:p-10 rounded-xl text-white' data-aos="fade-up"  data-aos-duration="1000">
                        <div className='text-center pb-10'>
                            <span className='text-2xl font-semibold hover:text-violet-500 border-b-2 border-dark-second hover:border-violet-500 transition-all duration-300' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000" >
                                What I've Learned
                            </span>
                        </div>
                        <div className='pb-5'>
                            <div className='text-left py-3' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <span className='text-xl'>Language</span>
                            </div>
                            <div className='grid grid-flow-col grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
                                    <LazyLoadImage
                                        src={JavascriptLogo}
                                        className='mx-auto h-24'
                                        alt='Javascript Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Javascript</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full'  data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
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
                            <div className='text-left py-3' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <span className='text-xl'>Frontend</span>
                            </div>
                            <div className='grid grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={HtmlLogo}
                                        className='mx-auto h-24'
                                        alt='HTML Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>HTML</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={CSSLogo}
                                        className='mx-auto h-24'
                                        alt='CSS Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>CSS</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={JavascriptLogo}
                                        className='mx-auto h-24'
                                        alt='Javascript Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Javascript</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={BootstrapLogo}
                                        className='mx-auto h-24'
                                        alt='Bootstrap Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Bootstrap</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={ReactLogo}
                                        className='mx-auto h-24'
                                        alt='React JS Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>React JS</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
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
                            <div className='text-left py-3' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <span className='text-xl'>Backend</span>
                            </div>
                            <div className='grid grid-flow-col grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={NodeLogo}
                                        className='mx-auto h-24 w-24'
                                        alt='Node Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Node JS``</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <div className='text-left py-3' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <span className='text-xl'>Currently Learning</span>
                            </div>
                            <div className='grid grid-flow-col grid-cols-2 gap-7 lg:grid-cols-4 items-center text-center'>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                    <LazyLoadImage
                                        src={PythonLogo}
                                        className='mx-auto h-24'
                                        alt='Python Logo'
                                    />
                                    <div className='mt-5'>
                                        <span>Python</span>
                                    </div>
                                </div>
                                <div className='p-5 bg-dark-third rounded-xl shadow-md h-full' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
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
