import React, { useState } from 'react';
import Footer from './Components/Footer';
import Body from './Components/Body';
import Nav from './Components/Nav';

function App() {
  const [sections] = useState([
    {name: 'About Me'}, 
    {name: 'My Work'}, 
    {name: 'Contact Me'},
    {name: 'Resume'}
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className='has-navbar-fixed-top'>
      <header>
        <Nav 
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
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
