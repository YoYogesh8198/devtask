import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
     return (
          <section className='landing'>
               <div className="heading">
                    <h1>Welcome to PopX</h1>
               </div>
               <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
               </div>
               <div className="Createaccount">
                    <Link to={'/signup'}>Create Account</Link>
               </div>
               <div className="already">
                    <Link to={'/login'}>Already Registered? Login</Link>
               </div>
          </section>
     )
}

export default Landing