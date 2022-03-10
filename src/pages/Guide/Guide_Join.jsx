import { useState, useContext, useEffect } from 'react';
import $ from 'jquery';
import './stylesheet/joinGuide.css';
import Guide_Level from './components/Guide_join/Page1_guidelevel';
import Set_Information from './components/Guide_join/Page2_set_information';
import Set_Recommend from './components/Guide_join/Page3_set_recommend';
import Set_Calendar from './components/Guide_join/Page4_set_calendar';
import Finish_Section from './components/Guide_join/Finish_set';
import axios from 'axios';
import context from '../../context';

const Guide_Join = () => {

    // const currentUser = useContext(context).userInfo;
    // const setGuideId = useContext(context).setGuideId;
    

    // const [guideForm, setGuideForm] = useState({
    //     guideEmail: '',
    //     introduction: '',
    //     countNum: 1,
    //     acceptGender: '男',
    //     transportation: '汽車',
    //     cityValue: null,
    //     viewpoint: '',
    //     restaurant: '',
    //     dateArray: [],
    //     guideImg: []
    // });


    const email = localStorage.getItem('email');
    const [guideForm, setGuideForm] = useState({
        guideEmail: email,
        introduction: '',
        countNum: 1,
        acceptGender: '男',
        transportation: '汽車',
        cityValue: null,
        viewpoint: '',
        restaurant: '',
        dateArray: [],
        guideImg: []
    });
    
    //完成送出
    const [Toggled, setToggled] = useState(false);
    const HideOrShow = Toggled ? { visibility: "visible" } : { visibility: "hidden" };

    const finishBtnClick = async () => {
        // setGuideForm({ ...guideForm, ['guideEmail']: email });
        //判斷資料都有填寫
        if (guideForm.introduction !== '' && guideForm.cityValue !== null && guideForm.viewpoint !== '' && guideForm.restaurant !== '') {
            //判斷照片有先上傳
            if (guideForm.guideImg.length == 4) {
                //資料post後端
                let result = await axios.post('http://localhost:8000/guideJoin', guideForm);
                if (result.status == 200) {
                    let guide_id = await axios.get('http://localhost:8000/guide/guide_id/' + email);
                    localStorage.setItem('guide_id',guide_id.data[0].guide_id);
                    // setGuideId(guide_id.data[0].guide_id);
                    setToggled(true);
                } else {
                    alert('註冊失敗，請重新註冊！');
                }
            } else {
                alert('照片選擇4張完畢記得要按「上傳」喔！');
            }
        } else {
            alert('請確實填寫所有欄位~');
        }


    };

    //下一頁移動
    useEffect(async () => {
        $('a').on('click', function (e) {
            e.preventDefault();
            $('html').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });
    }, []);

    return (

        <div className="guideJoin">
            <div>
                <hr className="guidePagehr" />
            </div>
            <section id="section0">
                <Guide_Level setGuideForm={setGuideForm} guideForm={guideForm} />
                <a href="#section01" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section01">
                <Set_Information setGuideForm={setGuideForm} guideForm={guideForm} />
                <a href="#section02" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section02">
                <Set_Recommend setGuideForm={setGuideForm} guideForm={guideForm} />
                <a href="#section03" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section03">
                <Set_Calendar setGuideForm={setGuideForm} guideForm={guideForm} />
                <input className="submitBtn" type="submit" value="送出" onClick={finishBtnClick}></input>
            </section>
            <section id='finishSection' style={HideOrShow}>
                <Finish_Section />
            </section>
        </div>
    );
}

export default Guide_Join;