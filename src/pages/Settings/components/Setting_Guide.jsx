import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import context from '../../../context';
import Setting_Guide_Introdution from './Setting_Guide_Group/Guide_Show/Setting_Guide_Introdution';
import Setting_Guide_IntrodutionInput from './Setting_Guide_Group/Setting_Guide_IntrodutionInput';
import Setting_Guide_NumOfPeople from './Setting_Guide_Group/Guide_Show/Setting_Guide_NumOfPeople';
import Setting_Guide_NumOfPeopleInput from './Setting_Guide_Group/Setting_Guide_NumOfPeopleInput';
import Setting_Guide_Gender from "./Setting_Guide_Group/Guide_Show/Setting_Guide_Gender";
import Setting_Guide_GenderInput from './Setting_Guide_Group/Setting_Guide_GenderInput';
import Setting_Guide_Transportation from './Setting_Guide_Group/Guide_Show/Setting_Guide_Transportation';
import Setting_Guide_TransportationInput from './Setting_Guide_Group/Setting_Guide_TransportationInput';
import Setting_Guide_City from './Setting_Guide_Group/Guide_Show/Setting_Guide_City';
import Setting_Guide_CityInput from './Setting_Guide_Group/Setting_Guide_CityInput';
import Setting_Guide_Recommandation from './Setting_Guide_Group/Guide_Show/Setting_Guide_Recommandation';
import Setting_Guide_RecommandationInput from './Setting_Guide_Group/Setting_Guide_RecommandationInput';
import Setting_Guide_Restaurant from './Setting_Guide_Group/Guide_Show/Setting_Guide_Restaurant';
import Setting_Guide_RestaurantInput from './Setting_Guide_Group/Setting_Guide_RestaurantInput';
import Setting_Guide_Available from './Setting_Guide_Group/Guide_Show/Setting_Guide_Available';
import Setting_Guide_AvailableInput from './Setting_Guide_Group/Calendar';

const Setting_Guide = () => {

    //context海底撈
    const { userInfo } = useContext(context);
    let userEmail = userInfo.email;
    let gid = localStorage.getItem('guide_id');    
    //回到嚮導頁面
    let gotoGuidePersonal = () => {
        window.location = `/GuidePersonal/${gid}`;
    }
    // console.log(userEmail);

    const [guideData, setGuideData] = useState({
        Intro: '',
        Num: 0,
        Gender: '',
        Tran: '',
        City: '',
        Recomman: [],
        Restaurant: []
    })

    //取值渲染
    useEffect(async () => {
        await Axios.post('http://localhost:8000/guide/getData', userEmail)
            .then((res) => {
                setGuideData({
                    Intro: res.data[0].introduction,
                    Num: res.data[0].num_limit,
                    Gender: res.data[0].sex_limit,
                    Tran: res.data[0].vehicle,
                    City: res.data[0].location,
                    Recomman: res.data[0].viewpoint,
                    Restaurant: res.data[0].restaurant
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    // console.log(guideData);
    //顯示值與input component互換 hook function
    const [introSwitch, setIntroSwitch] = useState(0);
    const [numSwitch, setNumSwitch] = useState(0);
    const [genderSwitch, setGenderSwitch] = useState(0);
    const [transSwitch, setTransSwitch] = useState(0);
    const [photoSwitch, setPhotoSwitch] = useState(0);
    const [citySwitch, setCitySwitch] = useState(0);
    const [recommanSwitch, setRecommanSwitch] = useState(0);
    const [restaurantSwitch, setRestaurantSwitch] = useState(0);
    const [availableSwitch, setAvailableSwitch] = useState(0);

    //showIntro
    let showIntro = '';
    switch (introSwitch) {
        case 0:
            showIntro = <Setting_Guide_Introdution setIntroSwitch={setIntroSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showIntro = <Setting_Guide_IntrodutionInput setIntroSwitch={setIntroSwitch}
                guideData={guideData} setGuideData={setGuideData} />;
            break;
    }

    //showNum
    let showNum = '';
    switch (numSwitch) {
        case 0:
            showNum = <Setting_Guide_NumOfPeople setNumSwitch={setNumSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showNum = <Setting_Guide_NumOfPeopleInput setNumSwitch={setNumSwitch}
                guideData={guideData} setGuideData={setGuideData} />;
            break;
    }

    //showGender
    let showGender = '';
    switch (genderSwitch) {
        case 0:
            showGender = <Setting_Guide_Gender setGenderSwitch={setGenderSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showGender = <Setting_Guide_GenderInput setGenderSwitch={setGenderSwitch}
                guideData={guideData} setGuideData={setGuideData} />;
            break;
    }

    //showTrans
    let showTrans = '';
    switch (transSwitch) {
        case 0:
            showTrans = <Setting_Guide_Transportation setTransSwitch={setTransSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showTrans = <Setting_Guide_TransportationInput setTransSwitch={setTransSwitch}
                guideData={guideData} setGuideData={setGuideData} />;
            break;
    }

    //showCity
    let showCity = '';
    switch (citySwitch) {
        case 0:
            showCity = <Setting_Guide_City setCitySwitch={setCitySwitch}
                guideData={guideData} />;
            break;
        case 1:
            showCity = <Setting_Guide_CityInput setCitySwitch={setCitySwitch}
                guideData={guideData} setGuideData={setGuideData} />;
            break;
    }

    //showRecomman
    let showRecomman = '';
    switch (recommanSwitch) {
        case 0:
            showRecomman = <Setting_Guide_Recommandation setRecommanSwitch={setRecommanSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showRecomman = <Setting_Guide_RecommandationInput setRecommanSwitch={setRecommanSwitch}
                guideData={guideData} />;
            break;
    }

    //showRestaurant
    let showRestaurant = '';
    switch (restaurantSwitch) {
        case 0:
            showRestaurant = <Setting_Guide_Restaurant setRestaurantSwitch={setRestaurantSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showRestaurant = <Setting_Guide_RestaurantInput setRestaurantSwitch={setRestaurantSwitch}
                guideData={guideData} />;
            break;
    }

    //showAvailable
    let showAvailable = '';
    switch (availableSwitch) {
        case 0:
            showAvailable = <Setting_Guide_Available setAvailableSwitch={setAvailableSwitch}
                guideData={guideData} />;
            break;
        case 1:
            showAvailable = <Setting_Guide_AvailableInput setAvailableSwitch={setAvailableSwitch}
                guideData={guideData} />;
            break;
    }



    return (
        <div className="Guide_Content">
            <p>嚮導設定<span onClick={gotoGuidePersonal}>嚮導個人頁面 →</span></p> 
            <div className="Content_Shadow">
                <div className="Guide_item">

                    <div className="Guide_Introdution">
                        <span>自我介紹</span>
                        {showIntro}

                    </div>

                    <div className="Guide_NumOfPeople">
                        <span>可接待人數</span>
                        {showNum}
                    </div>

                    <div className="Guide_Gender">
                        <span>可接待性別</span>
                        {showGender}
                    </div>

                    <div className="Guide_Transportation">
                        <span>交通工具</span>
                        {showTrans}
                    </div>


                    <div className="Guide_City">
                        <span>嚮導城市</span>
                        {showCity}
                    </div>

                    <div className="Guide_Recommandation">
                        <span>推薦景點</span>
                        {showRecomman}
                    </div>

                    <div className="Guide_Restaurant">
                        <span>推薦餐廳</span>
                        {showRestaurant}
                    </div>

                    <div className="Guide_Available">
                        <span>可接待時段</span>
                        {showAvailable}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Setting_Guide;