import React,{useContext, useEffect} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import context from '../../../../../context';

const Create_Group_Area = ({setCreatGroupaArea,setjustForGroup,groupPicsave,groupPicSit}) => {
    console.log(groupPicsave);
    console.log(groupPicSit);

    const currentUser = useContext(context);
    let userId = currentUser.userInfo.id;
    let userImg = currentUser.userInfo.img;
    let userName = currentUser.userInfo.lastName+currentUser.userInfo.firstName;
    let userEmail = currentUser.userInfo.email;

    useEffect(() => {
        let today = new Date();
        let yy = today.getFullYear();
        let mm = today.getMonth()+1;
        mm = (mm.toString().length<2)?(mm = "0" + mm.toString()):mm.toString();
        let dd = today.getDate()
        dd = (dd.toString().length<2)?(dd = "0" + dd.toString()):dd.toString();
        newGroupData.found_at = `${yy}-${mm}-${dd}`;
        setNewGroupData(newGroupData)
    }, []);
    

    const [newGroupData, setNewGroupData] = React.useState({
        society_name: '', found_at: ''
    })

    let history = useHistory();
    const swichRoute = () =>{  
        setCreatGroupaArea(false)
        history.push(`/Society`);
    }

    const typeGroupName = (e) =>{
        let societyName = e.target.value
        newGroupData.society_name = societyName
        setNewGroupData(newGroupData);
        setjustForGroup(societyName);
    }

    let wantPostPic = '';
    const postCreateGroup = async () =>{
        let routerId = '';
        if(newGroupData.society_name.trim()==''){
            alert('未輸入社團名稱')
            return;
        }else{
            console.log(newGroupData);
            // 新社團名稱
            axios.post('http://localhost:8000/create/society',newGroupData)
                .then(res=>{
                    console.log(groupPicsave);
                    let routerId = res.data.insertId;
                    if(groupPicsave!==undefined){
                        wantPostPic = groupPicsave.target.files[0];
                        // 新增 formData
                        const formData = new FormData();
                        formData.append('image', groupPicsave.target.files[0]);
                        // 傳送照片
                        axios.post(`http://localhost:8000/eachgroup/bgpic/${routerId}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        }).then((response) => {
                        console.log(response.data)
                        // 傳送照片格式
                        axios.post(`http://localhost:8000/group/bgpic/${routerId}`, groupPicSit)
                                .then(res=>{
                                    console.log(res.data)
                                    //創辦人權限
                                    axios.post('http://localhost:8000/createsociety/member',{societyID:routerId,id:userId})
                                        .then(res=>{history.push(`/Society/group/${routerId}`)})
                                })
                        });
                    }else{
                        axios.post('http://localhost:8000/createsociety/member',{societyID:routerId,id:userId})
                            .then(res=>{history.push(`/Society/group/${routerId}`)})
                    }

                })
    
        }
        setCreatGroupaArea(false)         
    }
    

    return (  
        <div className="create-group-area">
            <div className='clearfix'>
                <div className="btn float-left" onClick={swichRoute}><AiOutlineArrowLeft/></div>
            </div>
                <div className='h3'>建立社團</div>

                <div className='d-flex align-items-center m-3 cursor-pointer'>
                    <div className='mx-auto d-flex m-3'>
                    <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center'>
                        <img className='img-fluid' src={userImg} alt=""/>
                    </div>

                        <div className='d-flex flex-column justify-content-center'>

                            <div className='a-black'>{userName}</div>

                            <div>管理員</div>

                        </div>
                    </div>
                </div>

                <div className='mb-3'>
                    <div className='h4'>社團名稱</div>
                    <div className="inputer d-flex align-item-center">
                         <input className='inputer-input ml-3' type="text" placeholder='輸入社團名稱' onChange={typeGroupName}/>
                    </div>
                </div>

                <button className='btn btn-outline-success mt-5' onClick={postCreateGroup}>建立</button>
        </div>
    );
}
 
export default Create_Group_Area;