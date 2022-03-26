import React from "react";

function Work ({currentWork}) {

    console.log('inwork', currentWork);
    const { name, description, image, url, github } = currentWork;


    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">
                    {name}
                </h3>
                <img src={require(`../../images/${image}.jpg`)} alt={name} />
                <p>
                    {description}
                </p>
                <a href={github} target='_blank'>GitHub Repository</a>
            </div>
        </div>
    )
}

export default Work;