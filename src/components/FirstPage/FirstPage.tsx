import React from 'react'
import './firstPage.css'
interface FirstPageProps {

}

const FirstPage: React.FC<FirstPageProps> = () => {
  return <div className="first-page page">
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
}

export default FirstPage;