import React from 'react'
import './home.css'

const Home = () => {
  return <div className="home-container">
    <div className="first-page page">
      <div className="bg-img">
        <img src="oria.png" alt="oria feuerstein rozen" className="self-img" />
      </div>
      <div className="home-content">
        <h1 className="home-header">מורה פרטית</h1>
        <p className="content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Modi corporis, amet architecto beatae ea, aliquid eveniet quod, placeat
          sapiente quia dolores veritatis. Libero, quas impedit!</p>
      </div>
    </div>
    <div className="second-page page">
      <div className="home-content">
        <div className="content-text">
          <h1 className="home-header">פשוט לדבר מתמטיקה</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ut cupiditate quasi velit minima omnis.</p>
        </div>
      </div>
        <div className="study-img">
          <img src="study.png" alt="" />
        </div>
    </div>
  </div>
}

export default Home