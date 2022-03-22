import React, { useState } from 'react';
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
    <div>
      <header className='flex'>
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
    </div>
  );
}

export default App;
