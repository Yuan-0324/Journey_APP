//引入套件
import React from 'react';
//引入css
// import '../styles/Society/Society.css';
//引入components
// import Society_Group_Bar from './Society/society_Group_Bar'
// import Searching from './Society/Searching/Searching';
// import Attend_Society from './Society/Attend_Society';
// import Article_Area from './Society/Article_Area';

// ---- 更新 ----
// -- Style --
import './stylesheet/Society.css';
// -- Components --
import Society_Group_Bar from './components/society_Group_Bar';
import Searching from './components/Searching/Searching';
import Attend_Society from './components/Attend_Society';

const Society_Group_Discussion = () =>{

    const [attendGroup]=
    React.useState([
      {id:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'2', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'3', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'4', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'5', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'6', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'7', img:'', herf:'/Scoiety/group/disscussion'},
    ])

    // const {data,clickOnMore} = props;

    return (
        <div className='container'>
            <div className="row">
                <div className='col-3'>

                    <Searching />

                    <h5 className='mt-5'>我的社團</h5>
                    <div className='societyArea'>
                        {attendGroup.map((elm,idx)=>
                        <Attend_Society
                        key={idx}
                        data={elm}
                        />)}    
                    </div>

                </div>

                <div className='col-9'>

                    <div>
                        <Society_Group_Bar/>
                    </div>

                    {/* <Article_Area/> */}

                </div>
            </div>
        </div>

    );

}

export default Society_Group_Discussion;