import React from "react";
import reactPortfolio from "../assets/portfolio/reactPortfolio.JPG";
import DgraphReactApp from "../assets/portfolio/DgraphReactApp.JPG";
import needs from "../assets/portfolio/needs.JPG";
import rpsExercise from "../assets/portfolio/rpsExercise.JPG";
import pkmn from "../assets/portfolio/pkmn.JPG";
import portfolioV1 from "../assets/portfolio/portfolioV1.JPG";
import jdbc from "../assets/portfolio/jdbc.JPG";
import LiquidCalculator from "../assets/portfolio/LiquidCalculator.jpg";
import invoiceGenerator from "../assets/portfolio/invoiceGenerator.jpg";
import Popup from './Popup'
import { useState } from "react";


const Portfolio = () => {

    const [popup, setPopup] = useState(false);


  const portfolios = [
    {
      id: 0,
      src: LiquidCalculator,
      demoLink: "https://usernameb99.github.io/liquidCalculator/",
      codeLink: "https://github.com/usernameB99/liquidCalculator",
      hoverText: "E-Liquid-Calculator I've made with JavaScript"
    },
    {
      id: 1,
      src: reactPortfolio,
      demoLink: "https://usernameb99.github.io/portfolio/",
      codeLink: "https://github.com/usernameB99/my-react-portfolio",
      hoverText: "My current portfolio you were looking at right now :)"
    },
    {
      id: 2,
      src: needs,
      demoLink: "",
      codeLink: "",
      hoverText: "The project I'm currently working on"
    },
    {
      id: 3,
      src: DgraphReactApp,
      demoLink: "https://usernameb99.github.io/dgraphTest",
      codeLink: "https://github.com/usernameB99/dgraphTest",
      hoverText: "Small frontend with graph databese connection i made for my presentation"
    },
    {
      id: 4,
      src: invoiceGenerator,
      demoLink: "https://usernameb99.github.io/Invoice_Generator/",
      codeLink: "https://github.com/usernameB99/Invoice_Generator",
      hoverText: "Invoice generator with JavaScript"
    },
    {
      id: 5,
      src: rpsExercise,
      demoLink: "https://usernameb99.github.io/RockPaperScissors/",
      codeLink: "https://github.com/usernameB99/RockPaperScissors",
      hoverText: "Rock paper scissors with JavaScript"
    },
    {
      id: 6,
      src: jdbc,
      demoLink: "https://github.com/usernameB99/JDBC",
      codeLink: "https://github.com/usernameB99/JDBC",
      hoverText: "Java personal management with dao classes & data base connection "
    },
    {
      id: 7,
      src: pkmn,
      demoLink: "https://github.com/usernameB99/Pokemon",
      codeLink: "https://github.com/usernameB99/Pokemon",
      hoverText: "Pokemon arena battle in Java with csv reader"
    },
    {
      id: 8,
      src: portfolioV1,
      demoLink: "https://usernameb99.github.io/first-portfolio/",
      codeLink: "https://github.com/usernameB99/usernameB99.github.io",
      hoverText: "My first portfolio"
    },
  ];

  const handleClick = (link) => {
    if(link){
        window.open(link, "_blank")
    } else{
        setPopup(true);
    }
  }

  return (

<>

    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="invisible h-16 md:h-24" aria-hidden="true"></div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, hoverText }) => (
            <div
              title={hoverText}
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleClick(codeLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {popup && <Popup onClose = {() => setPopup(false)} />}
    

    </>
  );
};

export default Portfolio;
