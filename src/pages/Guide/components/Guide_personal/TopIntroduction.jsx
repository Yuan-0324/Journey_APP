import { useContext, useEffect, useState } from 'react';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import { BsFillStarFill } from 'react-icons/bs';
import { FiEdit } from "react-icons/fi";
import context from '../../../../context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import guideLevelImg from '../../../../images/guideImgs/guideJoinPage/guideLevelImg.png';

const Top_Introduction = () => {
    // const [guide, setGuide] = useState({});
    const currentUser = useContext(context).userInfo;
    // const guide_id = useContext(context).guide_id;
    // const [guideSelf, setGuideSelf] = useState(false);
    // const guidePagePath = useParams();
    // const [guideLevel, setGuideLevel] = useState('');

    // ---- 0306 -----

    const [guide, setGuide] = useState({});
    const guide_id = localStorage.getItem('guide_id');
    const [guideSelf, setGuideSelf] = useState(false);
    const guidePagePath = useParams();
    const [guideLevel, setGuideLevel] = useState('');




    //判斷是否為本人進入(icon:聊天室變修改、出現升級視窗)
    const [toggled, setToggled] = useState(false);
    const showOrHide = toggled ? { visibility: "visible" } : { visibility: "hidden" };
    useEffect(() => {
        if (guidePagePath.gId == guide_id) {
            setGuideSelf(true);
            setToggled(true);
        }
    }, []);
    const closeGuideSelf = () => {
        setToggled(false);
    }
    
    // console.log(guide_id);

    //判斷登入者是否已為嚮導(加入嚮導行列消失)
    const [isGuide, setIsGuide] = useState(false);
    const joinShowOrHide = isGuide ? { visibility: "hidden" } : { visibility: "visible" };
    useEffect(async () => {
        if (guide_id) {
            setIsGuide(true);
        }
    }, []);

    //撈取嚮導資料
    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/guidePersonal/topIntroduction/${guidePagePath.gId}`);
        // 嚮導等級判斷
        switch (result.data.level) {
            case 1: setGuideLevel(['Lv.1 菜鳥嚮導', 'Lv.2 在地嚮導', 5]); break;
            case 2: setGuideLevel(['Lv.2 在地嚮導', 'Lv.3 進階嚮導', 10]); break;
            case 3: setGuideLevel(['Lv.3 進階嚮導', 'Lv.4 高級嚮導', 15]); break;
            case 4: setGuideLevel(['Lv.4 高級嚮導', 'Lv.5 資深嚮導', 20]); break;
            case 5: setGuideLevel(['Lv.5 資深嚮導', 'Lv.6 頂尖嚮導', 30]); break;
            case 6: setGuideLevel(['Lv.6 頂尖嚮導']); break;
        };
        setGuide(result.data);
    }, []);

    let changeToPersonal = async () => {
        let result = await axios.get(`http://localhost:8000/guide/goto/personal/${guidePagePath.gId}`);
        // console.log(result.data[0].id)
        window.location = `/personal/${result.data[0].id}`;
    }

    return (
        <div>
            <section className='guideSelf' style={showOrHide}>
                <div className="guideLevelUpgrade" >
                    <div className="guideLevelUpgradeContent">
                        <h2 className='tittle'>我的嚮導事業</h2>
                        <span>目前 </span><span className='changeColor'>{guideLevel[0]}</span>&emsp;&ensp;
                        <span>差<span className='changeRed'>{guideLevel[2] - guide.commentNum}</span>評價</span>&emsp;&ensp;
                        <span>升級 </span><span className='changeColor'>{guideLevel[1]}</span>
                        <img src={guideLevelImg} className="guideLevelImg" />
                        <button onClick={closeGuideSelf}>進入個人嚮導頁面 →</button>
                    </div>
                </div>
            </section>
            <section className="joinBtn" style={joinShowOrHide}>
                <a href="/GuideJoin">加入嚮導行列 →</a>
            </section>
            <section className="guideHeader">
                <div className="memberImgArea">
                    <img src={guide.api_selfie} style={{cursor: 'pointer'}} onClick={changeToPersonal} className="memberImg" />
                </div>
                <div className="memberInformation">
                    <div className="memberName">
                        <span>{guide.guide_name} </span>
                    </div>
                    <div className="guideLevel">
                        <span className="star">< BsFillStarFill /></span>
                        <span className="guideStarNum">{guide.avg_star}</span>
                        <span className="guideTitle">{guideLevel[0]}</span>
                    </div>
                    <div className="memberIntroduction">
                        <span>{guide.introduction}</span>
                    </div>
                    <div className="Icon">
                        {guideSelf ? <a href=""><FiEdit /></a> : <a href=""><IoChatbubblesOutline /></a>}
                    </div>
                    <div className="guideLocation">
                        <span className="locationIcon">
                            <IoLocationSharp />
                        </span>
                        <span className="locationContent">{guide.location}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Top_Introduction;