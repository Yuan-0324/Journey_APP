import { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const About_Me = () => {

    const guidePagePath = useParams();
    const [guide, setGuide] = useState({});

    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/guidePersonal/aboutMe/${guidePagePath.gId}`);
        setGuide(result.data[0]);
    }, []);


    return (
        <div className="aboutMe">
            <span className="Title">關於我</span>
            <div className="aboutMeContent">
                <span className='title'>接待人數</span>
                <span>{guide.num_limit +"人"}</span>
            </div>
            <div className="aboutMeContent">
                <span className='title'>接待性別</span>
                <span>{guide.sex_limit}</span>
            </div>
            <div className="aboutMeContent">
                <span className='title'>交通工具</span>
                <span>{guide.vehicle}</span>
            </div>
            <div className="aboutMeContent">
                <span className='title'>興趣</span>
                <span>{guide.interested}</span>
            </div>
            <div className="aboutMeContent">
                <span className='title'>推薦景點  <AiOutlineLike /></span>
                <span>{guide.viewpoint}</span>
            </div>
            <div className="aboutMeContent">
                <span className='title'>推薦餐廳  <AiOutlineLike /></span>
                <span>{guide.restaurant}</span>
            </div>
        </div>
    );
}

export default About_Me;