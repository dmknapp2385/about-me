import React from "react";

function Resume () {
    return(
        <div className="pt-13 resume ml-6 pb-6">
            <p className="is-size-4">You can find my resume <a href="https://drive.google.com/file/d/1ePayXqZ5XVZyj7alGzPzomBlmHjCOs5G/view?usp=sharing" className="quad">Here</a></p>
            <ul className="disc">
                <h2 className="is-size-4">Front End Proficiencies</h2>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>jQuery</li>
                <li>Bulma</li>
                <li>Bootstrap</li>
                <li>HandleBars</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>apollo/client</li>
            </ul>
            <ul className="disc">
                <h2>Back End Proficiencies</h2>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Apollo/GraphQL</li>
            </ul>
            <ul className="disc ml-3 mb-4">
                <h2>Other Technologies</h2>
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>Insomnia REST API</li>
            </ul>
        </div>
    )
}

export default Resume;