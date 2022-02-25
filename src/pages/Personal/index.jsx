import React, { useState, useRef, useEffect, useContext } from 'react';
import reactRouterDom, { useParams, useHistory } from 'react-router-dom';
import './stylesheet/personal.css';

import Personal_Header from './components/Personal_Header';
import Personal_Container from './components/Personal_Container';

import context from '../../context';


// 個人頁面的全部整合
const Personal_Main = () => {
    const currentUser = useContext(context).userInfo;

    useEffect(()=>{
        if (!currentUser.id){
            window.location = '/';
        }
    })
    return (
        <>
            {/* 個人頁面上方，個人資訊 */}
            <Personal_Header />
            {/* 個人頁面下方，Po文等等內容 */}
            <Personal_Container />
        </>
    )
}

export default Personal_Main;