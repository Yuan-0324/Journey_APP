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
    const currentPath = useParams();
    const [currentUserFollowed, setCurrentUserFollowed] = useState([])

    // --- 瀏覽中頁面資訊 ---

    const [viewUserState, setViewUserState] = useState({
        viewUserInfo: {},
        viewUserImg: ''
    })

    // ---- 畫面一開始先儲存 Data ----

    useLayoutEffect(() => {
        fetchData();
    }, [])

    // ---- 先取得正在瀏覽中頁面資訊  ----

    let fetchData = async () => {
        // --- View info ---
        let data = await Axios.get('http://localhost:8000/personal/' + currentPath.id);
        // --- View img ---
        if (data.data !== 'error') {
            const forsetRef = ref(storage, `/member/${currentPath.id}/headShot${currentPath.id}.png`);
            let url = await getDownloadURL(forsetRef);
            // --- Current User Info ---
            let currentUserFollowed = await Axios.get('http://localhost:8000/personal/current_user/' + currentUser.id);
            setViewUserState({ ...viewUserState, ['viewUserInfo']: data.data, ['viewUserImg']: url });
            setCurrentUserFollowed(currentUserFollowed.data);
        } else {
            window.location = '/';
        }
    }

    // console.log(currentUserFollowed);

    return (
        <Context.Provider value={{
            userInfo: currentUser,
            currentUserFollowed: currentUserFollowed,
            setCurrentUserFollowed: setCurrentUserFollowed,
            viewUserInfo: viewUserState.viewUserInfo,
            viewUserImg: viewUserState.viewUserImg,
        }}>
            {/* 個人頁面上方，個人資訊 */}
            <Personal_Header />
            {/* 個人頁面下方，Po文等等內容 */}
            <Personal_Container />
        </Context.Provider>
    )
}

export default Personal_Main;