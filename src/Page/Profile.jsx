import React from 'react'
import img from '../ast/Ellipse 114.png'
import svg from '../ast/Group 1585.svg'

const Profile = () => {
     return (
          <section className='profile'>
               <div className="heading">
                    <p>Account Setting</p>
               </div>
               <div className="propic">
                    <div className="img">
                         <img src={img} alt="" />
                         <img src={svg} alt="" className='svg'/>
                    </div>
                    <div className="proname">
                         <h2>Marry Doe</h2>
                         <p>Marry@Gmail.Com</p>
                    </div>
               </div>
               <p className='propera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis tempore autem expedita fugiat magni harum iste fuga eaque consectetur.</p>
          </section>
     )
}

export default Profile