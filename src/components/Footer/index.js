import React from 'react'
import { FaHeart, FaRegCopyright } from 'react-icons/fa'

export default function index() {
    return (
        <div className="bg-dark-main font-poppins h-full">
            <div className="container mx-auto px-5 lg:px-20 h-full w-full lg:text-base text-sm">
                <div className="text-white pt-5 items-center justify-center flex flex-row" data-aos="fade-right" data-aos-duration="1500">
                    <span className="mr-2">Made with React JS, Tailwind CSS and</span>
                    <FaHeart />
                </div>
                <div className="text-white pb-5 pt-3 items-center justify-center flex flex-row" data-aos="fade-right" data-aos-duration="1500">
                    <FaRegCopyright className="mr-2" />
                    <span>2022 Reva Doni Aprilio</span>
                </div>
            </div>
        </div>
    )
}
