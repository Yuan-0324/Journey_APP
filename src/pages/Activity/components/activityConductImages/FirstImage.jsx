import { useState, useEffect, useContext, createRef, useRef, useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import { FiUpload } from 'react-icons/fi';
import { MdCancel, MdOutlineCancel } from 'react-icons/md';

import Context from '../../../../context';
// import Context from '../../../context';


import { ref, uploadBytesResumable, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase';


import { useParams } from 'react-router-dom';
import logo from '../../../../images/JourneyIcon.png';
// import touch from '../../../../images/activity/ActivityImageBackgroundImage.jpg'


// 個人資料顯示，包含個人 Banner
const FirstImage = ({data}) => {
    // console.log(data);
  
    // --- History ---
    const history = useHistory();

    // ---- 使用者資訊 ----

    const userInfo = useContext(Context).userInfo;


    // ---- 觀看頁面資訊 ----
    const currentPath = useParams()
    // console.log(currentPath.id);
    // ---- 狀態管理 ----

    const submitStatue = useRef(false);

    const [state, setState] = useState({
        changeModal: false,
        personalBanner: '',
        tempImgUrl: '',
        uploadImg: '',
        showBanner: false,
        statusBar: { display: 'none' },
        processBar: '',
        showFollow: false
    })

    // ---- 畫面初次取得資料 ----

    // ---- 初次渲染 Banner ----

    let fetchData = async () => {
                                                
        const forsetRef = ref(storage, `/event/${currentPath.id}/${data}/activity${currentPath.id}.png`);
        let url = await getDownloadURL(forsetRef);
        setState({
            ...state,
            ['personalBanner']: url,
        })
    }
    useEffect(() => {
        fetchData();
        window.scroll(0, 270)
        submitStatue.current = false;
        // console.log(data.eventID)
    }, []);
    // ---- 上傳 Banner 視窗 ----

    let changeBanner = (evt) => {
        setState({
            ...state,
            ['changeModal']: !state.changeModal,
            ['showBanner']: !state.showBanner
        })
    }
    // ---- 關掉 上傳 Banner 視窗 ----

    let closeBanner = () => {
        setState({
            ...state,
            ['changeModal']: !state.changeModal,
            ['tempImgUrl']: ''
        })
    }

    // ---- 顯示/關掉 瀏覽 Banner 視窗 ----

    let bannerShowBtn = () => {
        setState({ ...state, ['showBanner']: !state.showBanner })
    }

    // ---- 防止頁面滑動 ----

    // useEffect(() => {
    //     if (state.showFollow || state.changeModal || state.showBanner) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'scroll';
    //     }
    // }, [state.showFollow, state.changeModal, state.showBanner])

    // ---- 照片預覽，顯示準備上傳照片。 ----

    let bannerRevceive = (evt) => {
        let img = URL.createObjectURL(evt.target.files[0]);
        setState({
            ...state,
            ['tempImgUrl']: img,
            ['uploadImg']: evt.target.files[0]
        })
    }

    // ---- 送出上傳照片 ----

    let bannerSend = (evt) => {
        const storageRef = ref(storage, `event/${currentPath.id}/${data}/activity${currentPath.id}.png`);
        const metadata = {
            contentType: state.uploadImg.type
        };
        const upadateTask = uploadBytesResumable(storageRef, state.uploadImg, metadata)
        //以下為轉跳畫面
        console.log(upadateTask);
        upadateTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            setState({ ...state, ['processBar']: progress + '%', ['statusBar']: { display: 'flex' } })
        }, (err) => {
            // 錯誤顯示
            console.log(err);
        }, async () => {
            let url = await getDownloadURL(upadateTask.snapshot.ref);
            setState({ ...state, ['personalBanner']: url, ['changeModal']: !state.changeModal, ['tempImgUrl']: '', ['statusBar']: { display: 'none' } })
        })
    }

    //修改路徑
        // ;


        return (
            <div className='activityImageChang'>
                {/* 自己頁面的更換 */}
                {
                    state.changeModal && <div className='change-modal'>
                        <div className='change-container'>
                            <div onClick={closeBanner} className='close-btn'><MdCancel /></div>
                            {
                                state.tempImgUrl ? <>
                                    <img className='temp-img-show' src={state.tempImgUrl} alt="" />
                                    <button onClick={bannerSend} className='confirm-banner'>確認送出</button>
                                    <div style={state.statusBar} className='show-status'>
                                        <img src={logo} alt="" />
                                        <div className='progress-bar-show'>
                                            <div style={{ width: state.processBar }}></div>
                                        </div>
                                    </div>
                                </> : <>
                                    <h3>選擇檔案</h3>
                                    <div className='upload-wrap'>
                                        <input  onChange={bannerRevceive} type="file" accept='image/png, image/jpeg' />
                                        <FiUpload />
                                    </div>

                                </>
                            }
                        </div>
                    </div>
                }
                {/* 顯示瀏覽照片 */}
                {
                    state.showBanner && <div className='change-modal'>
                        <div className='change-container'>
                            <div onClick={bannerShowBtn} className='close-btn'><MdCancel /></div>
                            <img className='temp-img-show' src={state.personalBanner} alt="" />
                            {/* --------- 如果是本人顯示更換按鈕 ------- */}
                            {userInfo.id == currentPath.id ? <button onClick={changeBanner} className='confirm-banner change-btn'>更換照片</button> : ''}
                        </div>
                    </div>
                }
                <div onClick={bannerShowBtn} className='activityImageChangItem' style={{ backgroundImage: `url('${state.personalBanner}')` }} >
                    {/* <img className='touchHide' src={touch}></img> */}
                </div>

            </div>
        )
    }
    export default FirstImage;