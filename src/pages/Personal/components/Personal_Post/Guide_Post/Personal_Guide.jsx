import { useEffect, useRef, useState } from 'react';
import { BsArrowRightSquareFill, BsArrowRightSquare } from 'react-icons/bs';
import Axios from 'axios';

import emptyStar from '../../../../../images/personal_page_img/rate_stars/empty.png';
import shineStar from '../../../../../images/personal_page_img/rate_stars/star.png';

const Personal_Guide = ({ guide, guideList, setGuideList }) => {

    const [reviewContent, setReviewContent] = useState('');
    // ---- 雙向綁定 ----
    let reviewChange = (evt) => {
        setReviewContent(evt.target.value);
    }

    // ---- 按鈕效果 ----
    const btnDefault = {
        color: 'rgba(0,0,0,0.3)',
        pointerEvents: 'none'
        // right: '-30px'
    }

    const [btnStyle, setBtnStyle] = useState(btnDefault);

    useEffect(() => {
        if (reviewContent) {
            setBtnStyle({
                color: '#1697d5',
                pointerEvents: 'all',
                boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
                right: '35px',
            });
        } else {
            setBtnStyle(btnDefault);
        }
    }, [reviewContent])


    // ---- 星星效果 ----
    // const [ starArr, setStarArr ] = useState([])

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

    let testing = (evt) => {
        let newList = guideList.filter(item => item.guideId !== guide.guideId );
        setGuideList(newList);
        setReviewContent('');
        setStarScore(0);
    }

    console.log(starScore);

    return (
        <div className="my-review">
            <div className="review-guide">
                <img src={ guide.guideImg } alt=""></img>
                <h1>{ guide.guideName }</h1>
                <h5>{ guide.guideDate }</h5>
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
                    <button onClick={testing} style={btnStyle}><BsArrowRightSquare /></button>
                </div>
            </div>
        </div>
    )
}

export default Personal_Guide;