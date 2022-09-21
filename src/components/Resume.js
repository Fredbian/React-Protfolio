import React from 'react'
import resume from '../utils/resume.pdf'

function Resume() {
    return (
        <section>
            <div className="container">
                <span className="title">
                    <h1>Download my <a className="resume" href={resume} style={{ color: "red", fontSize: "40px" }} target="_blank" rel="noreferrer">Resume📝</a></h1>
                </span>
                <br></br>
                <p>Here are a few technologies I've worked with recently:<br />⠀</p>
                <ol className="technologies">
                    <li>HTML & CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Handlebars</li>
                    <li>Sequelize</li>
                    <li>Insomnia</li>
                    <li>Heroku</li>
                    <li>Frontend Development</li>
                    <li>Server Side API & Third Party API</li>
                    <li>Backend Development</li>
                    <li>Full Stack Development</li>
                </ol>
            </div>
        </section>
    )
}

export default Resume