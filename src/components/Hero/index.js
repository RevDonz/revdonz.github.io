import React from "react";
import Typical from "react-typical";
import { IMGHero } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaGithub, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-dark-main font-poppins h-full">
      <div className="container mx-auto px-5 lg:px-20 h-full">
        <div className="flex lg:flex-row flex-col-reverse h-full text-white justify-between items-center rounded-xl shadow-md lg:shadow-none bg-dark-second lg:bg-dark-main p-4 lg:p-0">
          <div className="py-5 w-full lg:w-2/3 text-center lg:text-left">
            <span className="font-semibold text-2xl lg:text-5xl">
                Hi There! <br/>
                
                <Typical
                steps={["I'm Reva Doni Aprilio", 3000, "I'm", 500]}
                loop={Infinity}
                className="inline-block"
                />
            </span>
            <div className="py-5 text-gray-400 w-full lg:w-3/4 lg:text-lg leading-8">
              <p>I'm learning web developing since 2019.</p>
              <p>Hello, my name is <span className="text-violet-500">Reva Doni Aprilio</span> and people who's know call me Doni (19). I Live in Bandung, West Java. I am a Telkom University student and majored in Software Engineering.</p>
            </div>
            <div className="py-3 flex items-center flex-col lg:flex-row">
              <button className="px-3 py-2 bg-transparent focus:outline-none hover:bg-violet-500 border-solid border-2 border-violet-500 rounded-lg transition-all duration-300">
                <a href="mailto:aprilio842@gmail.com">Contact Me</a>
              </button>
              <div className="flex mt-5 lg:mt-0 p-4 space-x-5 text-3xl">
                <a href="https://github.com/RevDonz"><FaGithub className="hover:text-violet-500 transition-all duration-300" /></a>
                <a href="https://www.facebook.com/reva.doni.aprilio/"><FaFacebook className="hover:text-violet-500 transition-all duration-300" /></a>
                <a href="https://www.instagram.com/revdonz_/"><FaInstagram className="hover:text-violet-500 transition-all duration-300" /></a>
                <a href="https://t.me/RevDonz"><FaTelegram className="hover:text-violet-500 transition-all duration-300" /></a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <LazyLoadImage src={IMGHero} className="" alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
