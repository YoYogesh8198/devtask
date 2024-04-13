import React from 'react'

const Signup = () => {
     return (
          <section className='signup'>
               <div className="heading">
                    <h1>Create your PopX account</h1>
               </div>
               <form action="">
                    <div className='name'>
                         <fieldset>
                              <legend>Full Name</legend>
                              <input type="text" placeholder='Full Name' />
                         </fieldset>
                    </div>
                    <div className='phone'>
                         <fieldset>
                              <legend>Phone number</legend>
                              <input type="text" placeholder='Enter Mobile Number' />
                         </fieldset>
                    </div>
                    <div className='email'>
                         <fieldset>
                              <legend>Email address</legend>
                              <input type="text" placeholder='Enter email address' />
                         </fieldset>
                    </div>
                    <div className='password'>
                         <fieldset>
                              <legend>Password</legend>
                              <input type="text" placeholder='Enter your password' />
                         </fieldset>
                    </div>
                    <div className='company'>
                         <fieldset>
                              <legend>Company name</legend>
                              <input type="text" placeholder='Enter company name' />
                         </fieldset>
                    </div>
                    <div className="radio">
                         <p>Are you an Agency?</p>
                         <div className='label'>
                              <div className='label1'>
                                   <input type="radio" id="Yes"
                                        name="brand" value="Yes" />
                                   <label for="Yes">Yes</label>
                              </div>
                              <div className='label1'>
                                   <input type="radio" id="No"
                                        name="brand" value="No" />
                                   <label for="No">No</label>
                              </div>
                         </div>

                    </div>
                    <div className="button">
                         <button>Create Account</button>
                    </div>
               </form>
          </section>
     )
}

export default Signup