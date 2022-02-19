import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
// import img11 from '../../images/蒙娜麗莎.jpg';

// ---- 更新 ----
import img11 from '../../../images/蒙娜麗莎.jpg';

const Evaluation = () => {

    const customerArr = [
        { cId: 1, cImg: img11, cName: "蒙娜麗莎", cStarNum: 4.1, date: "2022/02/11", evaluation: "給你100個讚~" },
        { cId: 2, cImg: img11, cName: "Bob", cStarNum: 4.3, date: "2022/05/13", evaluation: "我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 3, cImg: img11, cName: "Julia", cStarNum: 4.9, date: "2022/01/08", evaluation: "其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 4, cImg: img11, cName: "蒙娜麗莎", cStarNum: 4.1, date: "2022/02/11", evaluation: "給你100個讚~" },
        { cId: 5, cImg: img11, cName: "Bob", cStarNum: 4.3, date: "2022/05/13", evaluation: "我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" },
        { cId: 6, cImg: img11, cName: "Julia", cStarNum: 4.9, date: "2022/01/08", evaluation: "其他一切則會迎刃而解。我們不得不相信，世界上若沒有評價。" }
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
                                <span>{item.evaluation}~</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Evaluation;