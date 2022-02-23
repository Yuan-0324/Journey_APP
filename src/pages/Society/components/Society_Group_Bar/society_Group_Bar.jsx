//引入套件
import React, { useEffect } from 'react';
//引入componemts
import About_Group from './About_Group';
import Group_Discussion from './Group_Discussion';
import Group_Event from './Group_Event';
import Group_Member from './Group_Member';
import Group_Media from './Group_Media';

const Society_Group_Bar = ({id}) =>{

    // 取得此頁相關資料
    // useEffect(() => {
        
    // }, [groupPage]);
    const [groupPageData, setGroupPageData] = React.useState({id:'', name:'瓷仿插花高級班', img:'/img/1.jpg'})

    // 個人在此社團身分
    // useEffect(() => {
        
    // }, []);
    const [whoAmIHere, setWhoAmIHere] = React.useState(
        {}
    )


    const [whichShow, setWhichShow]=React.useState('g-discussion');

    const swicher = (e) =>{
        switch(e.target.className){
            case 'g-about':
                setWhichShow('g-about');
                break;
            case 'g-discussion':
                setWhichShow('g-discussion');
                break;
            case 'g-event':
                setWhichShow('g-event');
                break;
            case 'g-member':
                setWhichShow('g-member');
                break;
            case 'g-media':
                setWhichShow('g-media');
                break;
        }
    }

    return (
        <div className='society_group_bar overflow-hidden'>
            <div className='society_group_upperbar d-flex flex-column'>
                <img className='group-img' src={groupPageData.img} alt="" />
                <div className='group-bar-pic-set btn'>編輯照片</div>
            </div>
            

            <div className="society_group_lowerbar d-flex flex-column mx-auto">
                <div>
                    <div className='group_name d-flex'>
                        <p className='h3 float-left'>{groupPageData.name}</p>
                        <span className='float-left ml-4'>成員人數</span>
                    </div>
                    <ul className='d-flex list-unstyled text-center cursor-pointer'>
                        <li className='g-about' onClick={swicher}>關於</li>
                        <li className='g-discussion' onClick={swicher}>討論</li>
                        <li className='g-event' onClick={swicher}>活動</li>
                        <li className='g-member' onClick={swicher}>成員</li>
                        <li className='g-media' onClick={swicher}>媒體</li>
                    </ul>
                </div>
            </div>

            <div>

                {whichShow=="g-about" ? <About_Group/> :null}
                {whichShow=="g-discussion" ? <Group_Discussion/> :null}
                {whichShow=="g-event" ? <Group_Event/> :null}
                {whichShow=="g-member" ? <Group_Member/> :null}
                {whichShow=="g-media" ? <Group_Media/> :null}
                
            </div>
  
        </div>
    );

}

export default Society_Group_Bar;