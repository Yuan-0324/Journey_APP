import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import context from '../../../../context';
import { useHistory } from "react-router-dom";

const Society_Group = (props) =>{

    const currentUser = useContext(context);
    let userId = currentUser.userInfo.id;

    const [myGroup, setMyGroup] = React.useState([])
    const [recommendGroup, setRecommendGroup]=React.useState([])

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/society/allgroup',{userId:userId})
            .then( async(res)=>{
                
                
                setMyGroup(res.data) 
            })
    }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/society/recommendgroup',{userId:userId})
            .then(res=>{
                // console.log(res.data[0]);
                
                // let newres = res.data;
                // newres.map(async (elm,idx)=>{
                //     // console.log(elm);
                //     elm.bg_pic.type = 'image/jpg';
                //     let data = res.data[0].bg_pic;
                //     var blob1 = new Blob([new Uint8Array(data.data)]); 
                //     const imageUrl = URL.createObjectURL(blob1); 
                //     // console.log(imageUrl);
                //     newres[idx].bg_pic = imageUrl;
                    
                // })
                setRecommendGroup(res.data);
            })    
    }, []);

    let history = useHistory();
    const swichGroup = (e) =>{
        // console.log(e.target.dataset.club);
        window.scrollTo(0, 0);
        let groupId = e.target.dataset.club;
        history.push(`Society/group/${groupId}`);
    }

    return (
        <div className='society-group'>
            <div className='h3 mt-3 ml-3'>我的社團</div>
            <div className='clearfix'>
                <div className='common-use-group '>
                    {myGroup.map((elm,idx)=>
                        <div key={idx} className='group-swich mt-3 float-left ml-3 cursor-pointer'  onClick={swichGroup}>
                        <div>
                            <img src={`data:image/png;base64,${elm.bg_pic}`}
                             alt="" data-club={elm.societyID} /> 
                        </div>
                         <div className='text-align-left' data-club={elm.societyID}> 
                             <p className='m-1 ml-2' data-club={elm.societyID}>{elm.society_name}</p>
                             <span className='leef' data-club={elm.societyID}>{elm.society_num}成員</span>
                         </div>
                    </div>
                    )}
                </div>
            </div>

            <hr />

            <div className='h3 mt-3 ml-3'>推薦社團</div>   
            <div className='clearfix'>
                <div>

                    {recommendGroup.map((elm,idx)=>
                       <div key={idx} className='group-swich mt-3 float-left ml-3 cursor-pointer' data-club={elm.societyID}  onClick={swichGroup}>
                       <div data-club={elm.societyID}>
                           <img src={`data:image/png;base64,${elm.bg_pic}`} alt="" data-club={elm.societyID} /> 
                       </div>
                        <div className='text-align-left' data-club={elm.societyID}> 
                            <p className='m-1 groupy-name ml-2' data-club={elm.societyID}>{elm.society_name}</p>
                            <span className='leef' data-club={elm.societyID}>{elm.member_num}成員</span>
                        </div>
                       <button className='btn btn-outline-success text-align-rigth' data-club={elm.societyID}>加入社團</button>
                   </div>
                    )}

                </div>
            </div>

        </div> 
    );

}

export default Society_Group;