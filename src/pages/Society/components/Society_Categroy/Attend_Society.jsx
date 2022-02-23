//引入套件
import React from 'react';

const Attend_Society = () =>{

    const [attendGroup, setAttendGroup]=
    React.useState([
      {id:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'2', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'3', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'4', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'5', img:'', herf:'/Scoiety/group/disscussion'},
    ])

    return (
        // 看能否沿用家原的component
        <div className='society-club'>
            <div className='society-container'>
                <h3>我參加的社團</h3>

                    
                
                
            </div>
        </div>
      
    );

}

export default Attend_Society;