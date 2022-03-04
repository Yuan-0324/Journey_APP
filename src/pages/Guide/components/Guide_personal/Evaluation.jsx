import { useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Evaluation = () => {
    const guidePagePath = useParams();
    const [evaliationArr, setEvaliationArr] = useState([]);
    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/guidePersonal/evaluation/${guidePagePath.gId}`);
        setEvaliationArr(result.data);
    }, []);

    return (
        <section className="evaluationArea">
            <div className="Title">旅客評價</div>
            <div className="evaluations">
                {evaliationArr.map(item =>
                    <div className="evaluation" key={item.commentID}>
                        <div className="evaluationImg">
                            <img src={item.api_selfie} alt="" />
                        </div>
                        <div className="evaluationBody">
                            <div className="evaluationName">
                                <span>{item.evaluator}</span>
                            </div>
                            <div className="evaluationstar">
                                <span className="star">< BsFillStarFill /></span>
                                <span className="starNum">{item.star}</span>
                            </div>
                            <div className="evaluationDate">{item.evaluate_date}</div>
                            <div className="evaluationContent">
                                <span>{item.content}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <a href="#" className='evaluationMore' style={evaliationArr == 0 ? { visibility: "visible" } : { display: "none" }}>目前尚無評價</a>
            <a href="#" className='evaluationMore' style={evaliationArr.length>8 ? { visibility: "visible" } : { display: "none" }}>更多 →</a>
        </section>
    );
}

export default Evaluation;