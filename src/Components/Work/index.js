import React from "react";

function Work ({currentWork, onClose}) {

    const { name, description, image, url, github } = currentWork;


    return(
        <div className="modalBackdrop" onClick={onClose}>
            <div className="modalContainer">
                <h3 className="modalTitle has-text-centered is-size-3 mb-2">
                    {name}
                </h3>
                <a href={url} target='_blank'><img src={require(`../../images/${image}.jpg`)} style={{borderRadius:'5px'}} alt={name} /></a>
                <p className="is-size-5">
                    {description}
                </p>
                <a href={github} target='_blank' className="primary">GitHub Repository</a>
            </div>
        </div>
    )
}

export default Work;