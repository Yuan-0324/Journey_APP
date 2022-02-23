import React from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
// -- Components --
import Searching from './Searching/Searching';
import Attend_Society from './Attend_Society';
import Create_Group from "./Searching/Create_Group";
import Create_Group_Area from "./Searching/Create_Group_Area";

// 左側功能列表
const Society_Categroy = ({showGroup, GroupSwicher}) => {

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

            {creatGroupArea ? "" : <div className='society-toggle d-flex'>
                <a className="no society-toggle-btn" onClick={swichRoute}>社群</a>
                <a className="yes society-toggle-btn" onClick={swichRoute}>社團</a>        
            </div>}

            {creatGroupArea ? "" : <Searching/>}

            {creatGroupArea ? <Create_Group_Area setCreatGroupaArea={setCreatGroupArea}/> : ""}

            {showGroup && (currentParams.id == undefined) ? <Create_Group setCreatGroupaArea={setCreatGroupArea}/> : ""}

            <h5 className='mt-5'>我的社團</h5>

            <Attend_Society/>

        </div>
    )
}

export default Society_Categroy;