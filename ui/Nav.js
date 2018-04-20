import React from 'react';

const Nav = ({ navigate }) => {
  return (
    <div className='nav'>
      <div className='nav--logo'>
        SOLSTICE<span className="nav--description">  |  Utility Visualizer</span>
      </div>
      <ul>
        <li onClick={navigate}>Costs</li>
        <li onClick={navigate}>Usage</li>
      </ul>
    </div>
  )
}

export default Nav;