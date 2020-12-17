import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="exercise">
      <h2>Exercise</h2>
      
      <p><Link to={"/links"}>Task One</Link> </p>
      <p><Link to={"/todo"}>Task Two and Four</Link> </p>
      <p><Link to={"/divs"}>Task Four</Link> </p>
    </div>
  )
}

export default Home
