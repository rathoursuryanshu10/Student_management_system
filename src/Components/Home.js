import React from 'react'
import './Home.css'
import Card from './Card'

import team from '../assets/team.png'

import book from '../assets/books.png';
import girl from '../assets/girl_with_laptop.png';
import child from '../assets/child.png.png'


const cardData = [
  {
    title: "Python",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elevate your programming skills with our Python course, designed to empower you with practical expertise and real-world applications"
  },
  {
    title: "Java developer",
    image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Forge your path as a Java developer, crafting innovative solutions and driving technological advancements in the digital landscape"
  },
  {
    title: "Data analytics",
    image: "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Unveiling actionable insights from vast datasets, driving informed decisions and strategic advancements across industries."
  },
  {
    title: "C++",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Where performance meets versatility, enabling developers to craft high-speed, scalable software solutions for diverse applications"
  },
  {
    title: "Master in Chatgpt",
    image: "https://images.pexels.com/photos/16461434/pexels-photo-16461434/free-photo-of-close-up-of-a-person-holding-a-smartphone-displaying-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Your gateway to boundless creativity, knowledge, and assistance, revolutionizing the way we interact with AI"
  },
  {
    title: "Computer Networking",
    image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fueling global connectivity, computer networks enable seamless communication and resource sharing across devices"
  },
  {
    title: "Artificial intelligence",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Harness the power of AI to amplify efficiency, drive innovation, and unlock new possibilities for businesses of all sizes"
  },
  {
    title: "Machine Learning",
    image: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?b=1&s=612x612&w=0&k=20&c=AdtAH8A9d_UhcAJyDn6YR7XiDlf7Fz0zWRCmqQ2lSFY=",
    description: "Transforming industries with data-driven insights, Machine Learning paves the way for innovation and optimization"
  },
  {
    title: "Machine Learning",
    image: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?b=1&s=612x612&w=0&k=20&c=AdtAH8A9d_UhcAJyDn6YR7XiDlf7Fz0zWRCmqQ2lSFY=",
    description: "Transforming industries with data-driven insights, Machine Learning paves the way for innovation and optimization"
  }
];


const Home = () => {
  return (
    <>
    <main className="hero container1">
    <div className="hero-content">
      <h2 >Unleash Your Brainpower-<br/>
       Where Brilliance Meets Badassery! 🚀</h2>
      <h6>
      Buckle up, legends! EnlightenHub is not your grandma's learning platform – <br/>it's a wild ride to genius town. We're not here to bore you with textbooks; <br/>we're here to ignite your mind and make learning a freakin' adventure!
      </h6>

      <div className="hero-btn">
        <button className='btn-primary initial'>Get started </button>
        <button className="secondary-btn course">view courses</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
          <img src={girl} alt="girl" className='iim' />
          <img src={book} alt="books"  className='iim' />
          <img src={child} alt="books"  className='iim' />
        </div>
      </div>
 </div>
 
 <div className="hero-image">
      <img src={team } alt="team" />
    </div>
 </main>

 <div class='container'>
  <div class='row'>
 {/* <Card title="Python" image="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600" description="
Elevate your programming skills with our Python course, designed to empower you with practical expertise and real-world applications"/>
      
      <Card title="Java developer" image="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600" description="Forge your path as a Java developer, crafting innovative solutions and driving technological advancements in the digital landscape"/>
      
      <Card title="Data analytics" image="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600" description="Unveiling actionable insights from vast datasets, driving informed decisions and strategic advancements across industries."/>
      
      <Card title="C++" image="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600" description="
Where performance meets versatility, enabling developers to craft high-speed, scalable software solutions for diverse applications"/>
      
      <Card title="Master in Chatgpt" image="https://images.pexels.com/photos/16461434/pexels-photo-16461434/free-photo-of-close-up-of-a-person-holding-a-smartphone-displaying-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=600" description=" Your gateway to boundless creativity, knowledge, and assistance, revolutionizing the way we interact with AI"/>
      
      <Card title="Computer Networking" image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="

Fueling global connectivity, computer networks enable seamless communication and resource sharing across devices"/>
      
      <Card title="Artificial intelligence" image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" description="
Harness the power of AI to amplify efficiency, drive innovation, and unlock new possibilities for businesses of all sizes"/>
      
      <Card title="Machine Learning" image="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?b=1&s=612x612&w=0&k=20&c=AdtAH8A9d_UhcAJyDn6YR7XiDlf7Fz0zWRCmqQ2lSFY=" description="
Transforming industries with data-driven insights, Machine Learning paves the way for innovation and optimization"/>
     */}
{cardData.map((card, index) => (
        <Card key={index} title={card.title} image={card.image} description={card.description} />
      ))}
    </div>
    </div>
    
  {/* </main> */}
  </>
        
  )
}
export default Home
