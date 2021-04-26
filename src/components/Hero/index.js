import React from "react";
import Typical from "react-typical";
import { IMGHero } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaGithub, FaFacebook, FaInstagram, FaTelegram, FaFileDownload} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-dark-main font-poppins h-full">
      <div className="container mx-auto px-5 lg:px-20 h-full">
        <div className="flex lg:flex-row flex-col-reverse h-full text-white justify-between items-center rounded-xl shadow-md lg:shadow-none bg-dark-second lg:bg-dark-main p-4 lg:p-0">
          <div className="py-5 w-full lg:w-2/3 text-center lg:text-left">
            <div className="font-semibold text-xl lg:text-5xl" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                Hi There! <br/>
                
                <Typical
                steps={["I'm Reva Doni Aprilio", 3000, "I'm Junior Web Developer", 3000]}
                loop={Infinity}
                className="inline-block"
                />
            </div>
            <div className="py-5 text-gray-400 w-full lg:w-3/4 lg:text-lg leading-8" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <p>Hello, my name is Reva Doni Aprilio and people who's know call me Doni (19). I Live in Bandung, West Java. I am a Telkom University student and majored in Software Engineering.</p>
            </div>
            <div className="py-3 flex items-center flex-col lg:flex-row">
              <button className="px-3 py-2 bg-transparent focus:outline-none hover:bg-violet-500 border-solid border-2 border-violet-500 rounded-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000" data-aos-offset="-100">
                <a href="mailto:aprilio842@gmail.com">Contact Me</a>
              </button>
              <div className="flex mt-5 lg:mt-0 p-4 space-x-5 text-3xl">
                <a href="https://github.com/RevDonz" data-aos="fade-up" data-aos-offset="-100" data-aos-delay="400" data-aos-duration="1000"><FaGithub className="hover:text-violet-500 transition-all duration-300" alt="Github Logo" /></a>
                <a href="https://www.facebook.com/reva.doni.aprilio/" data-aos="fade-up" data-aos-offset="-100" data-aos-delay="500" data-aos-duration="1000"><FaFacebook className="hover:text-violet-500 transition-all duration-300" alt="Facebook Logo" /></a>
                <a href="https://www.instagram.com/revdonz_/" data-aos="fade-up" data-aos-offset="-100" data-aos-delay="600" data-aos-duration="1000"><FaInstagram className="hover:text-violet-500 transition-all duration-300" alt="Instagram Logo" /></a>
                <a href="https://t.me/RevDonz" data-aos="fade-up" data-aos-offset="-100" data-aos-delay="700" data-aos-duration="1000"><FaTelegram className="hover:text-violet-500 transition-all duration-300" alt="Telegram Logo" /></a>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row" >
              <a href="https://drive.google.com/file/d/1pn3dRa8sGlr48jC7oM6y8A_wmW5LeS3m/view?usp=sharing" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="-100" rel="noreferrer" target="_blank" className="hover:text-violet-500 duration-300 transition-all flex items-center">
                <FaFileDownload className="mr-1" />
                <span>Get my CV</span>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <LazyLoadImage src={IMGHero} width="100%" alt="Hero Image" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}
