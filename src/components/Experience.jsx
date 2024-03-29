import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bulma from "../assets/bulma.png";
import dgraph from "../assets/dgraph.png";
import java from "../assets/java.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import spring from "../assets/spring.png";
import WordPress from "../assets/WordPress.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: php,
      title: "PHP",
      style: "shadow-violet-500",
    },
    {
      id: 6,
      src: mysql,
      title: "My Sql",
      style: "shadow-cyan-800",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: bulma,
      title: "Bulma",
      style: "shadow-teal-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-400",
    },
    {
      id: 10,
      src: dgraph,
      title: "DGraph",
      style: "shadow-pink-400",
    },
    {
      id: 11,
      src: spring,
      title: "Spring Boot",
      style: "shadow-lime-400",
    },
    {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: WordPress,
      title: "Word Press",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >

      <div className="invisible h-16 md:h-24" aria-hidden="true"></div>

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-20">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Experience;
