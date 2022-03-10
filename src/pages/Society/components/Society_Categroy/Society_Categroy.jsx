import React from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
// -- Components --
import Searching from './Searching/Searching';
import Attend_Society from './Attend_Society';
import Create_Group from "./Searching/Create_Group";
import Create_Group_Area from "./Searching/Create_Group_Area";
import { RiGroup2Line } from 'react-icons/ri';
import { RiGroupLine } from 'react-icons/ri';

// 左側功能列表
const Society_Categroy = ({showGroup, GroupSwicher,setjustForGroup,groupPicsave,groupPicSit}) => {

    let history = useHistory();
    const swichRoute = (e) =>{
        let result = '';
        result = e.target.className.split(' ')[0];
        history.push(`/Society`);
        GroupSwicher(result == 'yes' ? true : false );    
    }

    // 判斷顯示建立社團否
    let currentParams = useParams();

    // 建立社團顯示
    const [creatGroupArea, setCreatGroupArea] = React.useState(false);

    return (
        <div className="col-left">

            {creatGroupArea || currentParams.id == 0 ? null : <div className='society-toggle d-flex align-items-center'>
                <a className="no society-toggle-btn" onClick={swichRoute}>社群<span className='yesno' onClick={swichRoute}><RiGroupLine className='ml-2' onClick={swichRoute}/></span></a>
                <a className="yes society-toggle-btn" onClick={swichRoute}>社團<span className='yesno' onClick={swichRoute}><RiGroup2Line className='ml-2' onClick={swichRoute}/></span></a>        
            </div>}

            {creatGroupArea || currentParams.id == 0 ? null : <Searching/>}

            {(creatGroupArea || currentParams.id == 0) ? <Create_Group_Area setCreatGroupaArea={setCreatGroupArea} setjustForGroup={setjustForGroup} groupPicsave={groupPicsave} groupPicSit={groupPicSit}/> : null}

            {showGroup && (currentParams.id == undefined) ? <Create_Group setCreatGroupaArea={setCreatGroupArea}/> : null}

            {/* {creatGroupArea || currentParams.id == 0 ? null : <div><h5 className='mt-5'>我的社團</h5><Attend_Society/></div>} */}

        </div>
    )
}

export default Society_Categroy;