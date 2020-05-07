import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className='landing'>
    <h1>sVideo</h1>
    <input type='text' placeholder='Search'></input>
    <Link to='/search'>or Browse All</Link>
  </div>
)

export default Landing;
