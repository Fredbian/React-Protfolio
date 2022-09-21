import React from 'react'

const imgStyle = {
    padding: '20px'
}

function About() {
    return (
      <section className="about-me">
        <h1 className="title">About Me</h1>
        <hr />
        <img className="photo" style={imgStyle} src="../public/images/photo.png" alt="Fred Bian"/>
        <p className="content">
          Hi Everyone, I'm Fred, currently learning coding in Monash University Coding Bootcamp.
        </p>
        <p className="content">
          Apart from working and coding, I like to reading, travelling and fishing.
        </p>
      </section>
    )
  }
  
  export default About