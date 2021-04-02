import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-dark-main font-poppins">
            <div className="flex justify-between items-center text-white w-4/5 mx-auto py-5">
                <span className="text-xl">Reva Doni Aprilio</span>
                <div className="flex space-x-3">
                    <span>About Me</span>
                    <span>Project</span>
                </div>
            </div>
        </div>
    )
}
