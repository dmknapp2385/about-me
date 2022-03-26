import React from "react";

function Resume () {
    return(
        <div className="pt-13 resume ml-6">
            <p className="is-size-4">You can find my resume <a href="https://docs.google.com/document/d/1nX2guS0b6HTvIUh9i4JR55ghs0Q7n7dO/edit?usp=sharing&ouid=112667350361087570066&rtpof=true&sd=true" className="quad">Here</a></p>
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