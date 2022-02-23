//-- 套件 --
import React from 'react';
import { useParams } from 'react-router-dom'

// -- Style --
import './stylesheet/Society.css';
//-- Components --
import Society_Categroy from "./components/Society_Categroy/Society_Categroy";
import Society_Right from './components/Society_Right/Society_Right';

const Society_Container = () => {
    let currentParams = useParams();
    const [showGroup, setShowGroup] = React.useState(false);
    const GroupSwicher = (e)=>{
        setShowGroup(e);
    }


    return (
        <section className='society-section'>
            <div className='society-container mx-auto'>
                {/* 左方功能表 */}
                <Society_Categroy showGroup={showGroup} GroupSwicher={GroupSwicher}  />
                {/* 右方顯示內容 */}
                <Society_Right showGroup={showGroup} currentParams={currentParams} />
                {/* <Society_Post /> */}
            </div>
        </section>
    )
}

export default Society_Container;