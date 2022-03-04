import { useEffect, useRef, useState } from 'react';
import { BsArrowRightSquareFill, BsArrowRightSquare } from 'react-icons/bs';
import Axios from 'axios';
import moment from 'moment'
import emptyStar from '../../../../../images/personal_page_img/rate_stars/empty.png';
import shineStar from '../../../../../images/personal_page_img/rate_stars/star.png';

const Personal_Guide = ({ guide, guideList, setGuideList }) => {

    // ---- 雙向綁定 ----

    const [reviewContent, setReviewContent] = useState('');

    let reviewChange = (evt) => {
        setReviewContent(evt.target.value);
    }

    // ---- 按鈕效果 ----

    const btnDefault = {
        color: 'rgba(0,0,0,0.3)',
        pointerEvents: 'none'
    }

    const [btnStyle, setBtnStyle] = useState(btnDefault);

    useEffect(() => {
        if (reviewContent) {
            setBtnStyle({
                color: '#1697d5',
                pointerEvents: 'all',
                boxShadow: '3px 3px 5px rgba(0,0,0,0.2)'
            });
        } else {
            setBtnStyle(btnDefault);
        }
    }, [reviewContent])


    // ---- 星星效果 ----

    const [starScore, setStarScore] = useState(0);
    const [showScore, setShowScore] = useState('');

    const starArr = useRef([
        { star: 1, show: '不好', pic: emptyStar },
        { star: 2, show: '有點不好', pic: emptyStar },
        { star: 3, show: '一般般', pic: emptyStar },
        { star: 4, show: '還不錯', pic: emptyStar },
        { star: 5, show: '一級棒', pic: emptyStar }
    ])

    let starClick = (evt) => {
        setStarScore(evt.target.dataset.score);
        setShowScore(evt.target.dataset.show);
    }

    let starMoveIn = (evt) => {
        evt.target.src = shineStar;
        let prevStar = evt.target.previousElementSibling;
        while (prevStar) {
            prevStar.src = shineStar;
            prevStar = prevStar.previousElementSibling;
        }
        let nextStar = evt.target.nextElementSibling;
        while (nextStar) {
            nextStar.src = emptyStar;
            nextStar = nextStar.nextElementSibling;
        }
    }

    let starMoveOut = (evt) => {
        const stars = evt.target.parentElement.children;
        if (starScore !== 0) {
            for (let i = 1; i <= stars.length; i++) {
                if (i <= starScore) {
                    stars[i - 1].src = shineStar;
                } else {
                    stars[i - 1].src = emptyStar;
                }
            }
        } else {
            for (let i = 1; i <= stars.length; i++) {
                stars[i - 1].src = emptyStar;
            }
        }
    }

    // ---- 送出星星 ----

    const [sendAlertToggle, setSendAlertToggle] = useState(false);

    let sendReview = (evt) => {
        if (reviewContent && (starScore !== 0)) {
            let newList = guideList.filter(item => item.reservation_number !== guide.reservation_number);
            setGuideList(newList);
            let postStar = async () => {
                const data = {
                    star: starScore,
                    content: reviewContent,
                    reservation_number: guide.reservation_number
                }
                await Axios.post('http://localhost:8000/personal/reviews/stars/', data)
            }
            postStar();
        }
    }

    // ---- Date Change ----

    let dateTransfer = () => {
        let format = moment(guide.reservation_date).format('YYYY-MM-DD')
        return format;
    }

    // ---- 關閉通知 ----

    let closeAlert = () => {
        setSendAlertToggle(!sendAlertToggle);
    }

    // ---- 防止 Modal 畫面滑動 ---- 

    useEffect(() => {
        // console.log('Guide Page')
        if (sendAlertToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [sendAlertToggle])

    // --- 畫面初次渲染 ---

    useEffect(()=>{
        // postStatus.current = false;
    },[])

    return (
        <div className='review-card'>
            {
                sendAlertToggle && <div className='send-alert'>
                    <div className='send-alert-content'>
                        <h3>JOURNEY 收到囉！</h3>
                        <button onClick={closeAlert}>ok</button>
                    </div>
                </div>
            }
            <div className="my-review">
                <div className="review-guide">
                    <img src={guide.api_selfie} alt=""></img>
                    <div>
                        <h1>{guide.lastName} {guide.firstName}</h1>
                        <h5>{dateTransfer()}</h5>
                    </div>
                </div>
                <div className='review-form'>
                    <div className='star-rate'>
                        <h5>嚮導評分</h5>
                        <div className="review-stars">
                            {
                                starArr.current.map((star, idx) => <img data-score={star.star} data-show={star.show} src={star.pic} key={idx} onMouseOut={starMoveOut} onClick={starClick} onMouseMove={starMoveIn} ></img>)
                            }
                        </div>
                        <div className="review-stars-score"><span>{showScore}</span></div>
                    </div>
                    {/* <input style={{ display: 'none' }} id="reviewStar0" name='reviewStar' type="number"></input> */}
                    <div className='review-form-send'>
                        <textarea onChange={reviewChange} placeholder='請輸入您的評價' maxLength="50" value={reviewContent}></textarea>
                        <button onClick={sendReview} style={btnStyle}><BsArrowRightSquare /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal_Guide;