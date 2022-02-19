import { useState } from 'react'
import { useParams } from 'react-router-dom'
 
// 頁面主要元素導入
import Personal_Categroy from "./Personal_Categroy/Personal_Categroy";
import Personal_Post from "./Personal_Post/Personal_Post";

// 整合 Po文內容及左方切換鈕

const Personal_Container = () => {
 
    
    return (
        <section className='personal-section'>
            <div className='presonal-container'>
                {/* 左方功能表，按鈕等等 */}
                <Personal_Categroy />
                {/* 右方顯示內容 */}
                <Personal_Post />
            </div>
        </section>
    )
}

export default Personal_Container;