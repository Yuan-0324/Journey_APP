import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import img1 from '../../../../images/guideImgs/headShot1.png';
import img2 from '../../../../images/guideImgs/headShot2.png';
import img3 from '../../../../images/guideImgs/headShot3.png';
import img4 from '../../../../images/guideImgs/headShot4.png';
import img5 from '../../../../images/guideImgs/headShot5.png';
import img6 from '../../../../images/guideImgs/headShot6.png';
import img7 from '../../../../images/guideImgs/headShot7.png';
import img8 from '../../../../images/guideImgs/headShot8.png';

const Evaluation = () => {

    const customerArr = [
        { cId: 1, cImg: img1, cName: "徐千翔", cStarNum: 4.1, date: "2022/02/11", evaluation: "給你100個讚~我們不得不相信，世界上若沒有評價。" },
        { cId: 2, cImg: img2, cName: "潘芷芹", cStarNum: 4.3, date: "2022/05/13", evaluation: "我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 3, cImg: img3, cName: "謝嘉原", cStarNum: 4.9, date: "2022/01/08", evaluation: "其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 4, cImg: img4, cName: "林與諶", cStarNum: 4.1, date: "2022/02/11", evaluation: "給你100個讚~" },
        { cId: 5, cImg: img5, cName: "邱郁芳", cStarNum: 4.3, date: "2022/05/13", evaluation: "我們一般認為，抓住了問題的關鍵，其他一其他一切則會迎刃而解。切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 6, cImg: img6, cName: "田中千惠", cStarNum: 4.9, date: "2022/01/08", evaluation: "其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 7, cImg: img7, cName: "何侑庭", cStarNum: 4.3, date: "2022/05/13", evaluation: "我們一般認為，抓住了問題的關鍵，其他一其他一切則會迎刃而解。切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 8, cImg: img8, cName: "顏雅姿", cStarNum: 4.9, date: "2022/01/08", evaluation: "其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" }
    ]

    return (
        <section className="evaluationArea">
            <div className="Title">旅客評價</div>
            <div className="evaluations">
                {customerArr.map(item =>
                    <div className="evaluation">
                        <div className="evaluationImg">
                            <img src={item.cImg} alt="" />
                        </div>
                        <div className="evaluationBody">
                            <div className="evaluationName">
                                <span>{item.cName}</span>
                            </div>
                            <div className="evaluationstar">
                                <span className="star">< BsFillStarFill /></span>
                                <span className="starNum">{item.cStarNum}</span>
                            </div>
                            <div className="evaluationDate">{item.date}</div>
                            <div className="evaluationContent">
                                <span>{item.evaluation}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <a href="#" className='evaluationMore'>更多 →</a>
        </section>
    );
}

export default Evaluation;