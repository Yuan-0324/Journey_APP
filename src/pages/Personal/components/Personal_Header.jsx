import { useState, useEffect, useContext, createRef, useRef, useLayoutEffect } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

import Context from '../../../context';
import { storage } from '../../../firebase';
import logo from '../../../images/JourneyIcon.png';
import Personal_Followed from './Personal_Header_Components/Personal_Followed';

// 個人資料顯示，包含個人 Banner
const Personal_Header = ({ personalBanner, setPersonalBanner }) => {

    // --- History ---
    const history = useHistory();

    // ---- 使用者資訊 ----

    const userImg = useContext(Context).viewUserImg;
    const currentUserFollowed = useContext(Context).currentUserFollowed;
    const setCurrentUserFollowed = useContext(Context).setCurrentUserFollowed;

    // --- 觀看瀏覽資訊 ---
    const viewUserInfo = useContext(Context).viewUserInfo;
    const viewUserImg = useContext(Context).viewUserImg;
    const currentPath = useParams()


    // 取得及 set
    const viewUserState = useContext(Context).viewUserState;
    const setViewUserState = useContext(Context).setViewUserState;


    // --- 使用者資訊 --- 
    const currentUser = useContext(Context).userInfo;
    const currentUserImg = useContext(Context).currentUserImg;

    // ---- 狀態管理 ----

    // ---- 個人大頭貼上傳 ----
    const [profileModal, setProfileModal] = useState(false);
    const [profileState, setProfileState] = useState({
        updateFile: '',
        url: userImg
    });

    const submitStatue = useRef(false);

    const [state, setState] = useState({
        changeModal: false,
        tempImgUrl: '',
        uploadImg: '',
        showBanner: false,
        statusBar: { display: 'none' },
        processBar: '',
        isFollowed: '',
        followBtn: { color: '#1697d5', backgroundColor: '#fff' },
        followNum: 0,
        showFollow: false
    });

    // ---- 瀏覽對象 追蹤清單 ----

    let fetchFollower = async () => {
        let result = await Axios.get('http://localhost:8000/personal/followed/list/' + currentPath.id);
        return result;
    }

    // ---- 初次渲染 Banner ----

    let fetchData = async () => {
        let result = await fetchFollower();
        let followStatus = currentUserFollowed.find(follow => (follow.member_email === viewUserInfo.email)) ? true : false;
        setState({
            ...state,
            ['followNum']: result.data ? result.data.length : 0,
            ['followBtn']: followStatus ? { backgroundColor: '#1697d5', color: '#fff' } : { color: '#1697d5', backgroundColor: '#fff' },
        })
    }

    useEffect(() => {
        window.scroll(0, 270)
        submitStatue.current = false;
        setPersonalBanner(viewUserInfo.personal_banner)
        fetchData();
        setProfileState({...profileState, ['url']: userImg});
    }, []);

    // ---- Follow 功能按鈕 ----

    let followUser = () => {
        // --- 送出狀態 ---
        submitStatue.current = true;
        let isFollowed = currentUserFollowed.find(follow => (follow.member_email === viewUserInfo.email)) ? true : false;
        // --- 資料的變更 ---
        if (!isFollowed) {
            setCurrentUserFollowed([...currentUserFollowed, { member_email: viewUserInfo.email }]);
            setState({ ...state, ['isFollowed']: !state.isfollowed })
        } else {
            let newFollowList = currentUserFollowed.filter(follow => follow.member_email !== viewUserInfo.email)
            setCurrentUserFollowed(newFollowList);
            setState({ ...state, ['isFollowed']: !state.isfollowed })
        }
    }

    // ---- 偵測資料變化，然後 POST / DELETE ----

    useEffect(() => {
        if (!submitStatue.current) {
            return;
        } else {
            // ---- 判斷是復在追中清單 ----
            let isFollowed = currentUserFollowed.find(follow => (follow.member_email === viewUserInfo.email)) ? true : false;
            let followerAdd = async () => {
                let data = {
                    currentUserEmail: currentUser.email,
                    followEamil: viewUserInfo.email
                }
                // ---- 如果本來未追蹤 則會加入追蹤 ----
                if (isFollowed) {
                    await Axios.post('http://localhost:8000/personal/current_user/followed_add', data);
                    let result = await fetchFollower();
                    setState({
                        ...state,
                        ['followNum']: result.data ? result.data.length : 0,
                        ['followBtn']: { backgroundColor: '#1697d5', color: '#fff' }

                    })
                    // ---- 如果本來有追蹤 則會取消追蹤 ----
                } else {
                    await Axios.delete('http://localhost:8000/personal/current_user/followed_add', { data: data })
                    let result = await fetchFollower();
                    setState({
                        ...state,
                        ['followNum']: result.data ? result.data.length : 0,
                        ['followBtn']: { color: '#1697d5', backgroundColor: '#fff' }
                    })
                }
            }
            followerAdd();
        }
    }, [currentUserFollowed])

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

    useEffect(() => {
        if (state.showFollow || state.changeModal || state.showBanner) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [state.showFollow, state.changeModal, state.showBanner])

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
        const storageRef = ref(storage, `member/${currentUser.id}/headBanner${currentUser.id}.png`);
        const metadata = {
            contentType: state.uploadImg.type
        };
        const upadateTask = uploadBytesResumable(storageRef, state.uploadImg, metadata);

        upadateTask.on('state_changed', snapshot => {
            // 上傳中
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            setState({ ...state, ['processBar']: progress + '%', ['statusBar']: { display: 'flex' } })
        }, (err) => {
            // 上傳錯誤
            console.log(err);
        }, async () => {
            // 成功
            let url = await getDownloadURL(upadateTask.snapshot.ref);
            console.log(url);
            let result = await Axios.post('http://localhost:8000/personal/personal/bannner/change', { id: currentUser.id, url });
            setPersonalBanner(url)
            setState({ ...state, ['changeModal']: !state.changeModal, ['tempImgUrl']: '', ['statusBar']: { display: 'none' } })
        })
    }

    // ---- 顯示 大頭貼 ---

    let showHeadshot = () => {
        // window.open(userImg);

        // ---- 0306 ----
        setProfileModal(!profileModal);
    }

    let personalProfileToggle = () => {
        setProfileModal(!profileModal);
        setProfileState({...profileState, ['tempImg']:''})
    }

    let personalSend = () => {
        const storageRef = ref(storage, `member/${currentUser.id}/headShot${currentUser.id}.png`);
        const metadata = {
            contentType: profileState.updateFile.type
        };
        const upadateTask = uploadBytesResumable(storageRef, profileState.updateFile, metadata);

        upadateTask.on('state_changed', snapshot => {
            // 上傳中
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (err) => {
            // 上傳錯誤
            console.log(err);
        }, async () => {
            // 成功
            let url = await getDownloadURL(upadateTask.snapshot.ref);
            console.log(url);
            let result = await Axios.post('http://localhost:8000/personal/personal/profile/change', { id: currentUser.id, url });
            // setPersonalBanner(url)
            // setState({ ...state, ['changeModal']: !state.changeModal, ['tempImgUrl']: '', ['statusBar']: { display: 'none' } })
            setProfileState({...profileState, ['tempImg']:''})
            setViewUserState({...viewUserState, ['viewUserImg']: url});
            setProfileModal(false);
        })
    }

    let personalRevceive = (evt) => {
        let img = URL.createObjectURL(evt.target.files[0]);
        setProfileState({...profileState, ['updateFile']:evt.target.files[0], ['tempImg']: img});
    }

    // ---- 顯示 追蹤清單 ----

    let followShow = () => {
        setState({ ...state, ['showFollow']: !state.showFollow });
    }

    return (
        <header className='personal-header'>
            {/* 自己頁面的更換 */}
            {
                state.changeModal && <div className='personal-change-modal'>
                    <div className='change-container'>
                        <div onClick={closeBanner} className='close-btn'><MdCancel /></div>

                        {/* 是否有暫存照片 有的話顯示照片 沒有的話顯示上傳 */}
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

            {/* 大頭貼的位置 */}
            {
                profileModal && <div className='profile-pic-change'>
                    <div className='change-container'>
                        <div onClick={personalProfileToggle} className='close-btn'><MdCancel /></div>
                        {
                            profileState.tempImg ? <>
                                <img className='temp-img-show' src={profileState.tempImg} alt="" />
                                <button onClick={personalSend} className='confirm-profile'>確認送出</button>
                                <div style={state.statusBar} className='show-status'>
                                    <img src={logo} alt="" />
                                    <div className='progress-bar-show'>
                                        <div style={{ width: state.processBar }}></div>
                                    </div>
                                </div>
                            </> : <>
                                <h3>請上傳您的頭像照片</h3>
                                <div className='upload-wrap'>
                                    <input onChange={personalRevceive} type="file" accept='image/png, image/jpeg' />
                                    <FiUpload />
                                </div>

                            </>
                        }
                    </div>
                </div>
            }


            {/* 顯示瀏覽照片 */}
            {
                state.showBanner && <div className='personal-change-modal'>
                    <div className='change-container'>
                        <div onClick={bannerShowBtn} className='close-btn'><MdCancel /></div>
                        <img className='temp-img-show' src={personalBanner} alt="" />
                        {/* --------- 如果是本人顯示更換按鈕 ------- */}
                        {currentUser.id == currentPath.id ? <button onClick={changeBanner} className='confirm-banner change-btn'>更換照片</button> : ''}
                    </div>
                </div>
            }

            <div onClick={bannerShowBtn} className='header-banner' style={{ backgroundImage: `url('${personalBanner}')` }} ></div>
            <div className='header-content'>
                <div className='profile-pic'>
                    {/* 大頭貼 */}
                    <div className='headShot' style={{backgroundImage: `url("${viewUserState.viewUserImg}")`}} onClick={showHeadshot} ></div>
                </div>
                <div className='profile-content'>
                    <h1 className='profile-name'>{viewUserInfo.lastName} {viewUserInfo.firstName}</h1>
                    <h4 className='profile-stars'>< BsFillStarFill /><span>4.6</span></h4>

                    {/* 追蹤按鈕 */}
                    {
                        +currentPath.id !== currentUser.id ?
                            <div
                                style={currentUserFollowed.find(follow =>
                                    (follow.member_email === viewUserInfo.email)) ?
                                    { backgroundColor: '#1697d5', color: '#fff' } : { color: '#1697d5', backgroundColor: '#fff' }}
                                onClick={followUser}
                                className='edit-icon'>
                                {currentUserFollowed.find(follow =>
                                    (follow.member_email === viewUserInfo.email)) ?
                                    <><AiOutlineUser /><span>已追蹤</span></> : <>< AiOutlineUserAdd /><span>追蹤</span></>}
                            </div> : ''
                    }

                    {/* 追蹤清單 */}
                    {
                        state.showFollow ? <div className='show-follow-detail'>
                            <div className='follow-container'>
                                <div onClick={followShow} className='close-btn'><AiOutlineCloseCircle /></div>
                                <h2>追蹤</h2>
                                <div className='follow-list'>
                                    {
                                        currentUserFollowed.map(followed => <Personal_Followed followed={followed} key={followed.member_email} />)
                                    }
                                </div>
                            </div>
                        </div> : ''
                    }

                    <h4 className='profile-friends'><span className='follower'>粉絲： {state.followNum}</span> {currentUser.id == currentPath.id ? <span onClick={followShow} className='followed'>追蹤： {currentUserFollowed.length}</span> : ''}</h4>
                    <h4 className='profile-location'>< IoLocationSharp /><span>{viewUserInfo.place}</span></h4>
                </div>
            </div>
        </header>
    )
}

export default Personal_Header