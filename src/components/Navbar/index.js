import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-dark-main">
            <div className="flex container justify-between items-center text-white mx-auto py-7 font-poppins px-10 lg:px-20">
                <span className="font-semibold text-xl relative hidden md:block">
                    RevDonz
                    <span className="w-3 h-3 bg-violet-500 rounded-full absolute animate-ping"></span>
                </span>
                <div className="flex space-x-3 mx-auto md:m-0">
                    <span className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500 transition-all duration-300">Home</span>
                    <span className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500 transition-all duration-300">About me</span>
                    <span className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500 transition-all duration-300">Project</span>
                </div>
            </div>  
        </div>
    )
}
