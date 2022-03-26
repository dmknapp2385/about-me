import React from "react";

function Work ({currentWork, onClose}) {

    const { name, description, image, url, github } = currentWork;


    return(
        <div className="modalBackdrop" onClick={onClose}>
            <div className="modalContainer">
                <h3 className="modalTitle has-text-centered mb-2">
                    {name}
                </h3>
                <a href={url} target='_blank'><img src={require(`../../images/${image}.jpg`)} style={{borderRadius:'5px'}} alt={name} /></a>
                <p >
                    {description}
                </p>
                <a href={github} target='_blank'>GitHub Repository</a>
            </div>
        </div>
    )
}

export default Work;