import React from 'react'

function Contact() {
  return (
    <div>
      <section id='contact'>
                  <h3>Contact me </h3>
                   <div className="contact_grid_right">
                    {/* <img classNameName='cover-img2' src="https://images.unsplash.com/photo-1569343285904-001a0ee57edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt=""/> */}
                    <form action="#" method="post">
                        <div className="row contact_left_grid">
                            <div className="col" >
                                <div className="form-group">
                                <label className='label'>Name</label>
                                    <input className="form-control" type="text" name="Name" placeholder="" required=""/>
                                </div>
                                <div className="form-group">
                                <label className='label'>Email</label>
                                    <input className="form-control" type="email" name="Email" placeholder="" required=""/>
                                </div>
                                <div className="form-group">
                                <label className='label'>Message</label>
                                    <textarea className='form-control' id="textarea" placeholder="" required=""></textarea>
                                </div>
                            </div>
                            <div className="sub">
                            
                                <button className="form-control" type="submit" value="Submit">
                                {/* <a href="mailto:ananyaram0803@gmail.com"></a> */}
                                <label className='label'>Submit</label>
                                
                                </button>
                            </div>
                        </div>
                    </form>
                </div> 
           </section>
    </div>
  )
}

export default Contact
