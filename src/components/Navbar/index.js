import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({scrollNav}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <div className={`${scrollNav ? 'sticky top-0 z-20 shadow-md' : ''} bg-dark-main relative`}>
            <div className="flex container justify-between items-center text-white mx-auto py-7 font-poppins px-5 lg:px-20">
                <span className="font-semibold text-xl relative hidden md:block">
                    RevDonzz
                    <span className="w-3 h-3 bg-violet-500 rounded-full absolute animate-ping"></span>
                </span>
                <div className="flex space-x-3 mx-auto md:m-0">
                    <Link
                        to="/"
                        onClick={toggleHome}
                        spy={true}
                        smooth={true}
                        className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500 transition-all duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500 transition-all duration-300"
                        spy={true}
                        smooth={true}
                        offset={-80}
                    >
                        About Me
                    </Link>
                    <Link
                        to="project"
                        className="hover:text-violet-500 border-b-2 border-dark-main hover:border-violet-500 transition-all duration-300"
                        spy={true}
                        smooth={true}
                        
                    >
                        Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar