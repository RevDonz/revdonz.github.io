import React from "react";
import Typical from "react-typical";
import { IMGHero } from '../../assets'

export default function Hero() {
  return (
    <div className="bg-dark-main font-poppins min-h-screen">
      <div className=" w-4/5 mx-auto">
        <div className="flex justify-between items-center text-white">
          <div className="text-left">
            <h1 className="font-semibold text-2xl">
                Hi There! <br/>
                I'm Reva Doni Aprilio
            </h1>
            <h1 className="py-5 text-gray-400">
                I'm {' '}
                <Typical
                steps={["Junior Web Developer", 3000, "Student", 3000]}
                loop={Infinity}
                className="inline-block"
                />
            </h1>
          {/* <button className="px-3 py-2 bg-transparent hover:bg-violet-500 border-solid border-2 border-violet-500 rounded-lg focus:outline-none">About</button> */}
          </div>
        <img src={IMGHero} alt="hero" className="w-1/2" />
        </div>
      </div>
    </div>
  );
}
