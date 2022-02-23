import { useState, useEffect } from 'react'

import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlineEdit, AiFillStar } from 'react-icons/ai';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import personalBgImage from '../../../images/personal_bgi.jpg';


// 個人資料顯示，包含個人 Banner
const Personal_Header = () => {

    const [personalBanner, setBanner] = useState('')
    
    useEffect(()=>{
        setBanner(personalBgImage)
    },[personalBanner]);

    return(
        <header className='personal-header'>
            
            <div id='personalBanner'  className='header-banner' style={{backgroundImage: `url('${personalBanner}')`}} ></div>
            <div className='header-content'>
                <div className='profile-pic'>
                    <img src='https://picsum.photos/id/1020/300/300' alt="" />
                </div>
                <div className='profile-content'>
                    <h1 className='profile-name'>Show Lo</h1>
                    <h4 className='profile-stars'>< BsFillStarFill /><span>4.6</span></h4>
                    <h5 className='edit-icon'>< AiOutlineEdit /></h5>
                    <h4 className='profile-friends'>粉絲：<span>5,487,995</span></h4>
                    <h4 className='profile-location'>< IoLocationSharp /><span>台中市</span></h4>
                </div>
            </div>
        </header>
    )
}

export default Personal_Header