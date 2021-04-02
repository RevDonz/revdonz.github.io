import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-dark-main font-poppins">
            <div className="flex justify-between items-center text-white w-4/5 mx-auto py-7">
                <span className="font-semibold text-xl">Reva Doni Aprilio</span>
                <div className="flex space-x-3">
                    <span className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500">Home</span>
                    <span className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500">About me</span>
                    <span className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500">Project</span>
                </div>
            </div>  
        </div>
    )
}
