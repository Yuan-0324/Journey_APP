import React,{ useState, useEffect, useContext, createRef, useRef, useLayoutEffect } from 'react'
import Canvas from './Canvas';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {storage} from '../../../../firebase';
import { useParams } from "react-router-dom";
import s_pic from '../../../../images/Home/main/weather.jpg';


import { FiUpload } from 'react-icons/fi';
import { MdCancel} from 'react-icons/md';
import Context from '../../../../context';

const Society_Pic = ({groupPic,groupPageData,allData,setGroupPicsave,setGroupPicSit,groupRight}) => {
    let societyID = useParams();

    // 社團資料庫抓的圖
    const bgPicStyle = {
        width : allData.pic_w,
        height : allData.pic_h,
        marginTop : allData.mTop,
        marginLeft : allData.mLeft
    }

    // 預設社團圖
    const orignPic ={
        width : 720,
        height : 200,
        marginTop : -30,
        marginLeft : 0
    }


    const [state, setState] = useState({
        changeModal: false,
        tempImgUrl:'',
        showBanner: false,
        statusBar: { display: 'none' },
        showFollow: false,
        yesPic:''
    })

    

    // ---- 上傳 Banner 視窗 ----

    let changeBanner = (evt) => {
        setState({
            ...state,
            ['changeModal']: !state.changeModal,
        })
    }

    // ---- 關掉 上傳 Banner 視窗 ----

    let closeBanner = () => {
        setState({
            ...state,
            ['changeModal']: !state.changeModal,
        })
    }

    // ---- 防止頁面滑動 ----
    useEffect(() => {
        if (state.changeModal || state.showBanner) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [state.changeModal, state.showBanner])

    // ---- 照片預覽，顯示準備上傳照片。 ----
    let wantPostPic = useRef();
    let bannerRevceive = (evt) => {
        
        wantPostPic.current = evt.target.files[0];
            // 新增 formData
            const formData = new FormData();
            formData.append('image', evt.target.files[0]);
            // 傳送資料
        if(societyID.id!=0){
            axios.post(`http://localhost:8000/eachgroup/bgpic/${groupPageData}`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }).then((response) => {
            //   console.log(response.data)
            });
        }

        let file = evt.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function(e){
            setState({
                ...state,
                ['tempImgUrl']: this.result,
                ['uploadImg']: evt.target.files[0],
                ['showBanner']: !state.showBanner

            })
            if(societyID.id==0){
                setGroupPicsave(evt)
            }
        }
    }

    // canvas banner資料
    let bannerPic = useRef();
    let bannerDiv = useRef({widthPer:'', heightPer:'', mTop:'', mLeft:''});

    let bannerSend = (evt) => {
        let bgPic = bannerPic.current
        let postThing = bannerDiv.current
        // 可存到fireBase
        

        //長寬存到mysql
        if(societyID.id!=0){
            const storageRef = ref(storage, `societyGroup/${societyID.id}/${societyID.id}.jpg`);
            const metadata = {
                contentType:   'image/jpg'
            };
            const upadateTask = uploadBytesResumable(storageRef, wantPostPic.current , metadata);

            axios.post(`http://localhost:8000/group/bgpic/${groupPageData}`, postThing)
                .then(res=>{
                    // console.log('ok')
                })
         }
   
    
    setState({ ...state, 
        ['showBanner']: !state.showBanner,
        ['yesPic']: bgPic, 
        ['changeModal']: !state.changeModal,  
        ['statusBar']: { display: 'none' } })
        if(societyID.id==0){
            setGroupPicSit(postThing)
        }
        
    }

    return ( 

        <div className='society-personal-header'>
            {state.changeModal && 
                <div className='change-modal'>
                    <div className='change-container'>
                        <div onClick={closeBanner} className='close-btn'><MdCancel /></div>
                        {
                            state.showBanner ? <>
                                {/* <img className='temp-img-show' src={state.tempImgUrl} alt="" /> */}

                                <Canvas tempImgUrl={state.tempImgUrl} width={720} height={150}  bannerPic={bannerPic} bannerDiv={bannerDiv}/>

                                <button onClick={bannerSend} className='confirm-banner'>確認送出</button>
                                <div style={state.statusBar} className='show-status'>
                                    <img src='' alt="" />
                                    <div className='progress-bar-show'>
                                        <div style={{ width: state.processBar }}></div>
                                    </div>
                                </div>
                            </> : 
                            <>
                                <h3>請上傳您的背景照片</h3>
                                <div className='upload-wrap'>
                                    <input onChange={bannerRevceive} type="file" accept='image/png, image/jpeg' />
                                    <FiUpload />
                                </div>

                            </>
                        }
                    </div>
                </div>
            }
            {/* 顯示瀏覽照片 */}

            <div className='society-header-banner overflow-hidden'>{state.yesPic ? <img src={state.yesPic} alt="" />:
            (groupPic ?<img style={bgPicStyle} src={`data:image/png;base64,${groupPic}`}/> : <img style={orignPic} src={s_pic} />)}</div>
            {groupPageData==0 && <div className='group-preview'>社團預覽</div>}
            {groupRight.right!=="0" && <button onClick={changeBanner} className='confirm-banner change-btn'>更換照片</button>}

        </div>
     );
}
 
export default Society_Pic;

