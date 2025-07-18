import React from 'react'
import Services from './Services'
import About from './About'
import Courses from './Courses'

const Home = () => {
   const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div>
          <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1> {userInfo?.name || ''}</h1>
    
    </div>

      <Services/>
      <About/>
      <Courses/>
    </div>
  )
}

export default Home