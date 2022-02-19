//引入套件
import React from 'react';
import img from '../../../images/bob.jpg';

const Society_Group_Bar = (props) =>{

    return (
        <div className='society_group_bar'>
            <div className='society_group_upperbar d-flex flex-column oo'>
                <img className='img-fluid' src={img} alt="" />
                <input type="button" value="編輯照片"/>
            </div>

            <div className="society_group_lowerbar d-flex flex-column mx-auto oo">
                <div className="mx-auto w-75 oo">
                    <div className='group_name d-flex'>
                        <p className='h3 float-left'>爬山社團</p>
                        <span className='float-left ml-4'>成員人數</span>
                    </div>
                    <ul className='d-flex list-unstyled text-center cursor-pointer'>
                        <li>關於</li>
                        <li>討論</li>
                        <li>活動</li>
                        <li>成員</li>
                        <li>媒體</li>
                    </ul>
                </div>
            </div>
  
        </div>
    );

}

export default Society_Group_Bar;