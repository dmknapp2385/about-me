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

  // isMobile if under 1023 px

  // hook called when windowSize is set to determine if isMobile
  const getIsMobile = () => window.innerWidth <= 1023;
  const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
     
  
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
          isMobile={isMobile}
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
