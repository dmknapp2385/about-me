import React from "react";


function Works () {
    const works =[
        {
            name: 'Song Starter 3000',
            description: 'An application designed to help cultivate creativity in musicians by generating random chord progressions',
            image: 'song-starter.jpg',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Song-Starter-3000/tree/main',
        },
        {
            name: 'Bored and Brews',
            description: 'An application designed using third party REST API endpoints to defeat boredum with activites and brews. The application will generate a random activity and list of nearby breweries that users can store in a weekly calendar to defeat bordem',
            image: '../images/bored.jpg',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/',
        },
        {
            name: 'Song Starter 3000',
            description: 'An application designed to help cultivate creativity in musicians by generating random chord progressions',
            image: '../images/song-starter.jpg',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Song-Starter-3000/tree/main',
        },
        {
            name: 'Song Starter 3000',
            description: 'An application designed to help cultivate creativity in musicians by generating random chord progressions',
            image: '../images/song-starter.jpg',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Song-Starter-3000/tree/main',
        },
        {
            name: 'Song Starter 3000',
            description: 'An application designed to help cultivate creativity in musicians by generating random chord progressions',
            image: '../images/song-starter.jpg',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Song-Starter-3000/tree/main',
        },
        {
            name: 'Song Starter 3000',
            description: 'An application designed to help cultivate creativity in musicians by generating random chord progressions',
            image: '../images/song-starter.jpg',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Song-Starter-3000/tree/main',
        },
    ]    
    return(

        <div className="tile is-ancestor is-9 pt-13">
            <div className="tile is-parent">
                {works.map((work)=>(
                    <div className={`${work.name} tile is-child`} key={work.name}>
                        <h1 className="quad">
                            {work.name}
                        </h1>
                        <p className="primary">
                            {work.description}
                        </p>
                        <img href={work.url}  alt={work.name}/>
                        <a href={work.github} target='_blank'>GitHub Repository</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works;