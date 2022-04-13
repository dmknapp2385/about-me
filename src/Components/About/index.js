import React from 'react'
import headShot from '../../images/head-shot.jpg';

function About({isMobile}) {
 
  return (
    <section className='pt-13 pb-13' id='about'>
      <div className={` ml-6 pb-6 mr-6 is-flex ${isMobile && 'is-flex-wrap-wrap'} is-justify-content-space-around level`}>
        <img className='mr-6' id='self-img' src={headShot}/>
        <p className='mr-6 '>
        I am an avid rock climber and adventurer. Currently exploring the wonders of HTML, CSS and JavaScript in the hopes of obtaining a remote job that will allow me to travel and climb. I have always been a problem solver and find web development to be a perfect blend of problem solving and creativity. My background before coming to web development and programming was in biology and I attended two years of college at Cornell University and Wellesley college to obtain a bachelor's degree in Biology, though after discovering rock climbing, I had no interest in pursuing a career with this degree.
        <br></br>
        I have always had a nomadic spirit and have lived all over the United States, growing up in Jackson Hole, Wyoming and Three Rivers, California where my parents worked for the National Park Service. I have a passion for all things nature and outdoor recreation. I have recently spent time in Maine, Tennessee and currently reside in Arizona. I am very curious and constantly expanding my learning and discovering new things that pique my interest.
        </p >
      </div>
    </section>
  )
}

export default About