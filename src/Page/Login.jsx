import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
     return (
          <section className='login'>
               <div className="heading">
                    <h1>Signin to your PopX account</h1>
               </div>
               <div className="paragraph">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <form action="">
                    <div className='email'>
                         <fieldset>
                              <legend>Email Address</legend>
                              <input type="text" placeholder='Enter email address' />
                         </fieldset>
                    </div>
                    <div className='email1'>
                         <fieldset>
                              <legend>Password</legend>
                              <input type="text" placeholder='Enter Password' />
                         </fieldset>
                    </div>
                    <div className="button">
                    <Link to={'/profile'}>Login</Link>
                    </div>
               </form>
          </section>
     )
}

export default Login