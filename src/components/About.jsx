import React from 'react'
import dp from '../dp.jpg'
function About() {
  return (
    <div>
      <section id="about">

        <div className="flex-2" id='aboutme'>
          <div className="flexItem">
            <img src={dp} alt="my-image" srcset="" className="mobileHide" />
          </div>
          <div className="flexItem flexText">
            <h2 className="sub-tittle">About Me</h2>
            <p className="text">
              "Hi, I'm Ananya, currently a II year student at SVVV University,Indore. I am a beginner undergraduate presently working on Web designing & sharpening my skills & trying to get more knowledge in this field.I have good knowledege of c,c++.
              Seeking oppourtunities to know more about web development industry and practical implementations.
              I love to work on html,css,javascript to make attractive and robust web applicatons and websites. "</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
