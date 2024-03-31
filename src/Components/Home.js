import React from "react";
// import "./Home.css";
import Card from "./Card";

import team from "../assets/team.png";

import book from "../assets/books.png";
import girl from "../assets/girl_with_laptop.png";
import child from "../assets/child.png.png";

const cardData = [
  {
    title: "Python",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Elevate your programming skills with our Python course, designed to empower you with practical expertise and real-world applications",
  },
  {
    title: "Java developer",
    image:
      "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Forge your path as a Java developer, crafting innovative solutions and driving technological advancements in the digital landscape",
  },
  {
    title: "Data analytics",
    image:
      "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Unveiling actionable insights from vast datasets, driving informed decisions and strategic advancements across industries.",
  },
  {
    title: "C++",
    image:
      "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Where performance meets versatility, enabling developers to craft high-speed, scalable software solutions for diverse applications",
  },
  {
    title: "Master in Chatgpt",
    image:
      "https://images.pexels.com/photos/16461434/pexels-photo-16461434/free-photo-of-close-up-of-a-person-holding-a-smartphone-displaying-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Your gateway to boundless creativity, knowledge, and assistance, revolutionizing the way we interact with AI",
  },
  {
    title: "Computer Networking",
    image:
      "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Fueling global connectivity, computer networks enable seamless communication and resource sharing across devices",
  },
  {
    title: "Artificial intelligence",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Harness the power of AI to amplify efficiency, drive innovation, and unlock new possibilities for businesses of all sizes",
  },
  {
    title: "Machine Learning",
    image:
      "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?b=1&s=612x612&w=0&k=20&c=AdtAH8A9d_UhcAJyDn6YR7XiDlf7Fz0zWRCmqQ2lSFY=",
    description:
      "Transforming industries with data-driven insights, Machine Learning paves the way for innovation and optimization",
  },
  {
    title: "Machine Learning",
    image:
      "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?b=1&s=612x612&w=0&k=20&c=AdtAH8A9d_UhcAJyDn6YR7XiDlf7Fz0zWRCmqQ2lSFY=",
    description:
      "Transforming industries with data-driven insights, Machine Learning paves the way for innovation and optimization",
  },
];
const Home = () => {
  return (
    <>
      <main className="hero container1 flex justify-around mt-10">
        <div className="mx-4 hero-content flex flex-col sm:w-6/12 gap-4">
          <h2 className="text-2xl font-bold">
            Unleash Your Brainpower-
            <br />
            Where Brilliance Meets Badassery! 🚀
          </h2>
          <h6 className="font-medium text-lg">
            Buckle up, legends! EnlightenHub is not your grandma's learning
            platform – <br />
            it's a wild ride to genius town. We're not here to bore you with
            textbooks; <br />
            we're here to ignite your mind and make learning a freakin'
            adventure!
          </h6>

          <div className="hero-btn flex gap-4">
            <button className="btn-primary initial bg-teal-500 rounded-sm text-center px-2 text-white font-bold py-1 text-lg">
              Get started{" "}
            </button>
            <button className="secondary-btn course   bg-teal-500 rounded-lg text-center px-2 text-white font-bold py-1 text-lg">
              view courses
            </button>
          </div>

          <div className="shopping">
            <p className="font-bold">Also Available On</p>
            <div className="brand-icons flex w-3/12">
              <img src={girl} alt="girl" className="iim" />
              <img src={book} alt="books" className="iim" />
              <img src={child} alt="books" className="iim" />
            </div>
          </div>
        </div>

        <div className="hero-image hidden sm:block">
          <img
            src={team}
            alt="team"
            className="w-full max-w-sm self-end rounded-full shadow-2xl shadow-black"
          />
        </div>
      </main>

      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
