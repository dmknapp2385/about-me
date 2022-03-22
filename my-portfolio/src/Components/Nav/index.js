import React from "react";

function Nav (props) {
    const {
        sections,
        currentSection,
        setCurrentSection
    } = props;
    return(
        
        <div className="flex">
            <ul id="nav">
                {sections.map((section)=> (
                    <li className={`${currentSection.name === section.name && 'navActive'}`} key={section.name}>
                        <span
                        onClick={()=>{
                            setCurrentSection(section)
                        }}>
                            {section.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;