import React from "react";

function Resume () {
    return(
        <div className="pt-13 resume ml-6">
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
            </ul>
            <ul className="disc ml-3">
                <h2>Back End Proficiencies</h2>
                <li>Node.js</li>
                <li>Insomnia REST API</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>React</li>
            </ul>
        </div>
    )
}

export default Resume;