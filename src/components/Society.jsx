import React from 'react';
import '../styles/Society/Society.css';
import Searching from './Society/Searching';
import Attend_Society from './Society/Attend_Society'
import Article_Area from './Society/Article_Area';
 
const society = () => {

    return (
      <div className='container'>
        <div className="row">
          <div className='col-3'>    
              <Searching/>
              <Attend_Society/>      
          </div>

          <div className='col-9'>
              <Article_Area/>
          </div>

        </div>
      </div>
    );

  }

 
export default society;