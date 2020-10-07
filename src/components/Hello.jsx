import React from 'react'
import Typewriter from 'typewriter-effect'
//import cover from '../cover.jpg'



function Hello() {
  return (
   <section>
      <div className="mainContent">
            <h4>Hi, I am</h4>
            <h1>Ananya Upadhyay</h1>
            <h3>
            <Typewriter
            options={{
              strings: ["Web Developer", "Coder", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          /></h3>
            
        </div>
        <div className="cover-img">
             <img src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="cover image"/> */}
             {/* <img src={cover} alt="cover-img"/> */}

        </div>
        </section>
  )
}

export default Hello
