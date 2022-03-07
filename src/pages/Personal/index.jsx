import React, { useState, useRef, useEffect, useContext, useLayoutEffect } from 'react';
import reactRouterDom, { useParams, useHistory } from 'react-router-dom';
import { ref, getMetadata, getDownloadURL } from 'firebase/storage';
import Axios from 'axios';
import { storage } from '../../firebase';


import './stylesheet/personal.css';
import Personal_Header from './components/Personal_Header';
import Personal_Container from './components/Personal_Container';

import Context from '../../context';

// ---- 個人頁面的全部整合 ----


const Personal_Main = () => {

    // --- 登入中的使用者 ---

    const currentUser = useContext(Context).userInfo;
    const [currentUserFollowed, setCurrentUserFollowed] = useState([])
    const [currentUserImg, setCurrentUserImg] = useState('')
    

    // --- 瀏覽中頁面資訊 ---

    const currentPath = useParams();
    const [viewUserState, setViewUserState] = useState({
        viewUserInfo: {},
        viewUserImg: ''
    })
    const [personalBanner, setPersonalBanner] = useState('')

    // ---- 畫面一開始先儲存 Data ----

    useLayoutEffect(() => {
        fetchData();
    }, [])

    
    // ---- 先取得正在瀏覽中頁面資訊  ----

    let fetchData = async () => {

        // --- View info ---

        let data = await Axios.get('http://localhost:8000/personal/' + currentPath.id);
        let user = await Axios.get('http://localhost:8000/personal/' + currentUser.id)
        // console.log(user)
        // --- View img ---
        if (data.data !== 'error') {
            // --- Current User Info ---
            setPersonalBanner(data.data.personal_banner);
            setViewUserState({ ...viewUserState, ['viewUserInfo']: data.data, ['viewUserImg']: data.data.api_selfie });
            if (currentUser.id !== 0) {
                let currentUserFollowed = await Axios.get('http://localhost:8000/personal/current_user/' + currentUser.id);
                setCurrentUserFollowed(currentUserFollowed.data);
                setCurrentUserImg(user.data.api_selfie);
            }
        } else if (data.data == 'User Not Found') {
            window.location = '/error';
        } else {
            window.location = '/'
        }
    }

    // console.log(personalBanner)
    // console.log(currentUser);

    return (

        <Context.Provider value={{
            userInfo: currentUser,
            currentUserFollowed: currentUserFollowed,
            currentUserImg: currentUserImg,
            setCurrentUserFollowed: setCurrentUserFollowed,
            viewUserInfo: viewUserState.viewUserInfo,
            viewUserImg: viewUserState.viewUserImg,
            viewUserState,
            setViewUserState
        }}>
            {/* 個人頁面上方，個人資訊 */}
            <Personal_Header personalBanner={personalBanner} setPersonalBanner={setPersonalBanner} />
            {/* 個人頁面下方，Po文等等內容 */}
            <Personal_Container />
        </Context.Provider>

    )
}

export default Personal_Main;