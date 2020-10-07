import React from 'react'
import todo from '../todo.JPG'
import weather from '../weather.JPG'
import calci from '../calci.JPG'
import pie from '../pie.JPG'
//import from '../'
function Projects() {
  return (
    <div>
        <section id='projects'>
        <div className="imageSection">
        <h2>Projects</h2>
        <div className="images">
        <a href="https://github.com/anannyya/bootcamp/tree/master/To-Do%20list">
            <img src={todo} alt="image" srcset=""/>
            <h3 className='project-name'>To-do list</h3>
            </a>
            <a href="https://github.com/anannyya/bootcamp/tree/master/A%20weather%20app">
            <img src={weather} alt="image" srcset=""/>
            <h3 className='project-name'>Weather app</h3>
            </a>
            <a href="https://github.com/anannyya/bootcamp/tree/master/Calculator">
            <img src={calci} alt="image" srcset=""/>
            <h3 className='project-name'>Caclulator</h3>
            </a>
            <a href="https://github.com/anannyya/bootcamp/tree/master/Cart">
            <img src={pie} alt="image" srcset=""/>
            <h3 className='project-name'>Shopping Cart</h3>
            </a>
                        
        </div>
    </div>
</section>
    </div>
  )
}

export default Projects
