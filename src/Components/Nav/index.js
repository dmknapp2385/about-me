import React, {useEffect} from "react";

function Nav (props) {
    const {
        sections,
        currentSection,
        setCurrentSection,
        isMobile,
        setIsMobile
    } = props;
    
    useEffect(() => {
        document.title = currentSection.name;
      }, [currentSection]);

    // function to toggle isMobile on/off for menu button
    function toggleBurger() {
        setIsMobile(!isMobile)
        setTimeout(() => {
            setIsMobile(isMobile)
        }, 1500); ;
    }
    
    return(
        <nav className="navbar top-nav is-fixed-top bkg-tert" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item ml-6">
                 <span className="is-size-2 has-text-weight-bold is-italic ml-4 quad mobile-nav" onClick={()=> {setCurrentSection({name: 'About Me'})}}>DaniElle Knapp</span>
                </a>

                <a role="button" className={`navbar-burger burger`}aria-label="menu" aria-expanded="false" data-target="burger" onClick={() => {toggleBurger()}}>
                <span className="burger quad" aria-hidden="true"></span>
                <span className="burger quad" aria-hidden="true"></span>
                <span className="burger quad" aria-hidden="true"></span>
                </a>
            </div>

            <div id="sections" className={`navbar-menu ${!isMobile && 'is-active'}`}>
                <div className="navbar-end level mr-6">
            
                {sections.map((section)=> (
                    <li className={`${currentSection.name === section.name && 'navActive'} pointer has-text-center primary level-item pr-3`} key={section.name} onClick={()=>{
                            setCurrentSection(section)
                        }}>
                        {section.name}
                    </li>
                ))}

                </div>
            </div>
        </nav>
        
    )
}

export default Nav;