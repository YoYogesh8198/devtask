import React from 'react'
import "./style.css"
import { Outlet, RouterProvider } from 'react-router-dom'
import { route } from './projectRoutes/Routing'

const App = () => {
     return (
          <section className='home'>
               <RouterProvider router={route}>
               </RouterProvider>
          </section>
     )
}

export default App