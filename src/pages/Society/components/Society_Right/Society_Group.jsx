import React from 'react';
import { useHistory } from "react-router-dom";

const Society_Group = (props) =>{

    const [myGroup, setOftenGroup]=
    React.useState([
      {name:'瓷仿插花高級班', img:'/img/1.jpg', id:"1"},
      {name:'令人不能自拔的', img:'/img/2.jpg', id:"2"},
      {name:'他會這麼說是有理由的', img:'/img/3.jpg', id:"3"},
      {name:'除了牙齒還有愛情', img:'/img/4.jpg', id:'4'},
      {name:'培根曾經提過', img:'/img/5.jpg', id:'5'},
      {name:'最難忍受的孤獨莫過於', img:'/img/6.jpg', id:'6'},
      {name:'肖伯納曾經認為', img:'/img/7.jpg', id:'7'},
      {name:'一個人如果不到最高', img:'/img/8.jpg', id:'8'},
    ])

    
    const [recommendGroup]=
    React.useState([
      {name:'瓷仿插花高級班', img:'/img/1.jpg'},
      {name:'令人不能自拔的', img:'/img/2.jpg'},
      {name:'他會這麼說是有理由的', img:'/img/3.jpg'},
      {name:'除了牙齒還有愛情', img:'/img/4.jpg'},
      {name:'培根曾經提過', img:'/img/5.jpg'},
      {name:'最難忍受的孤獨莫過於', img:'/img/6.jpg'},
      {name:'肖伯納曾經認為', img:'/img/7.jpg'},
      {name:'一個人如果不到最高', img:'/img/8.jpg'},
    ])

    let history = useHistory();
    const swichGroup = (e) =>{
        let groupId = e.target.dataset.club;
        history.push(`Society/group/${groupId}`);
    }

    return (
        <div className='society-group'>
            <div className='h3 mt-3 ml-3'>我的社團</div>
            <div className='clearfix'>
                <div className='common-use-group '>
                    {myGroup.map((elm,idx)=>
                        <div key={idx} className='group-swich mt-3 float-left ml-3'  onClick={swichGroup}>
                            <p className='w-100'>{elm.name}</p>
                            <img src={elm.img} alt="" data-club={elm.id} /> 
                        </div>
                    )}
                </div>
            </div>

            <hr />

            <div className='h3 mt-3 ml-3'>推薦社團</div>   
            <div className='clearfix'>
                <div>

                    {recommendGroup.map((elm,idx)=>
                        <div key={idx} className='group-swich mt-3 float-left ml-3'>
                            <a href='/Scoiety/group/page' className='d-flex justify-content-center align-items-end overflow-hidden'>
                                <div className='group-name h4 w-100'>{elm.name}</div>
                                <img src={elm.img} alt="" /> 
                            </a>
                        </div>
                    )}

                </div>
            </div>

        </div> 
    );

}

export default Society_Group;