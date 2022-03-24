import React from "react";

function Nav (props) {
    const {
        sections,
        currentSection,
        setCurrentSection
    } = props;
    return(
        <nav className="navbar top-nav is-fixed-top bkg-tert" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item ml-6">
                 <span className="is-size-1 has-text-weight-bold is-italic ml-4 quad" onClick={()=> {setCurrentSection({name: 'About Me'})}}>DaniElle Knapp</span>
                </a>

                <a role="button" className="navbar-burger quad" aria-label="menu" aria-expanded="false" data-target="burger">
                <span className="quad" aria-hidden="true"></span>
                <span className="quad" aria-hidden="true"></span>
                <span className="quad" aria-hidden="true"></span>
                </a>
            </div>

            <div id="sections" className="navbar-menu">
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