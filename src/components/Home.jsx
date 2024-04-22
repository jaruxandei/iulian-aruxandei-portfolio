import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/heroimage.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll"

const Home = () => {
  const [jobTitle, setJobTitle] = useState("a Full Time Tour Guide");

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitle(prevJobTitle => {
        return prevJobTitle === "a Full Time Tour Guide" ? "an Aspiring Front End Dev." : "a Full Time Tour Guide";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center items-center text-center sm:text-left sm:items-start sm:mt-0 sm:mb-0 sm:mr-4"> 
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4 lg:ml-0">
            I'm {jobTitle}
          </h2>
          <p className="text-gray-500 py-4 mx-auto text-justify sm:px-0 lg:ml-0">
          My name is Iulian. I am currently working as a Tour Guide and Tour Leader, but my main passion has shifted in the last year from the tourism industry towards web development.
          </p>
          <div className="mt-2 sm:mt-0">
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer lg:ml-0">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <img src={HeroImage} alt="julian in paris" className="rounded-2xl mx-auto w-2/3 sm:w-full mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
