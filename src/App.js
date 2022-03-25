import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Body from './Components/Body';
import Nav from './Components/Nav';

function App() {
  // set up hooks to change on section button click
  const [sections] = useState([
    {name: 'About Me'}, 
    {name: 'My Work'}, 
    {name: 'Contact Me'},
    {name: 'Resume'}
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  // hook to get window size to activate navbar burger
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  // isMobile if under 1023 px
  const [isMobile, setIsMobile] = useState();

  // hook called when windowSize is set to determine if isMobile
  useEffect(() => {
    if(windowSize.width <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({width:window.innerWidth, height:window.innerHeight});
    
    }   
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className='has-navbar-fixed-top'>
      <header>
        <Nav 
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
        />
      </header>
      <section id='main-section'>
        <Body
          currentSection={currentSection}
        >
        </Body>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
