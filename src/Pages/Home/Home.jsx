import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

const Home = ({ sidebar }) => {
  const [category,setCategory] = useState(0)
  
  return (
    <div className="container"> {/* Flex container */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`large-container ${sidebar ? '' : 'collapsed'}`}>
      <Dashboard category = {category}/> 
    </div>
    </div>
  )
}

export default Home
