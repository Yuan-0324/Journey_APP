import React from 'react';

//引入css
// import '../styles/Society/Society.css';
//引入components
// import Searching from './Society/Searching/Searching';

// ---- 更新 ----

// -- Style --
import './stylesheet/Society.css';
// -- Components --
import Searching from './components/Searching/Searching';


const Society_Group = (props) =>{

    const [oftenGroup, setOftenGroup]=
    React.useState([
      {name:'瓷仿插花高級班', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'1', img:'', herf:'/Scoiety/group/disscussion'},
    ])
    
    const [attendGroup]=
    React.useState([
      {name:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'2', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'3', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'4', img:'', herf:'/Scoiety/group/disscussion'},
      {name:'5', img:'', herf:'/Scoiety/group/disscussion'},
    ])

    return (
        <div className='container'>
            <div className="row">
                <div className='col-3'>

                    <Searching />

                </div>

                <div className='col-9 society-group'>
                    <div className='h3 mt-3 ml-3'>常用社團</div>
                    <div className='clearfix'>
                        <div className='common-use-group '>
                            {oftenGroup.map((elm,idx)=>
                                <div className='group-swich mt-3 float-left ml-3'><a href={elm.herf} className='d-flex justify-content-center align-items-end'>
                                <div className='h4'>{elm.name}</div></a></div>
                            )}
                        </div>
                    </div>

                    <hr />

                    <div className='h3 mt-3 ml-3'>所有社團</div>   
                    <div className='clearfix'>
                        <div className="all-society-group">

                            {attendGroup.map((elm,idx)=>
                                <div className='group-swich mt-3 float-left ml-3'><a href="" className='d-flex justify-content-center align-items-end'>
                                <div className='h4'>{elm.name}</div></a></div>

                            )}

                        </div>
                    </div>

                </div>

            </div> 

        </div>

    );

}

export default Society_Group;