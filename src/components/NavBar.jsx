import React, { Component } from 'react'
//import ProgressBar from 'react-bootstrap/ProgressBar'

class NavBar extends Component {
    render() {
        return (
            <nav >
                <h3 className="logo">
                    <strong>
                        Ananya Upadhyay
                    </strong>
                </h3>
                <div class="desktopNav">
               <ul>
                    <li>
                        <a href='index.html' className='listitem' id='active'>&nbsp;Home&nbsp;</a>
                    </li>
                    <li><a href='#about' className='listitem'>About Me</a></li>
                    <li><a href='#skills' className='listitem'>&nbsp;&nbsp;Skills&nbsp;&nbsp;</a></li>
                    <li><a href='#projects' className='listitem'>&nbsp;Projects&nbsp;</a></li>
                    <li><a href='#contact' className='listitem'>Contact Me</a></li>
                </ul>
                </div>
                <div class="mobileNav">
                    <input type='checkbox' id='click'/>
                    <label for="click" class="menu-btn">
                <i class="material-icons">format_align_justify </i> 
                </label>
                <ul>
                    <li>
                        <a href='index.html' className='listitem' id='active'>&nbsp;Home&nbsp;</a>
                    </li>
                    <li><a href='#about' className='listitem'>About Me</a></li>
                    <li><a href='#skills' className='listitem'>&nbsp;&nbsp;Skills&nbsp;&nbsp;</a></li>
                    <li><a href='#projects' className='listitem'>&nbsp;Projects&nbsp;</a></li>
                    <li><a href='#contact' className='listitem'>Contact Me</a></li>
                </ul>
                
                </div>
         
           
                </nav> 
        )
    }
}

export default NavBar
