import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineLike, AiFillStar } from 'react-icons/ai';
import '../../stylesheet/tour_guide.css';
import axios from 'axios';

const Search_results = ({ item }) => {

    //嚮導點擊
    const clickGuide = async (e) => {
        const guide_id = e.target.dataset.id;
        window.location = '/GuidePersonal/' + guide_id;
        await axios.put(`http://localhost:8000/guideSearch/guideClick/${guide_id}`);
    }
    return (
        <div className="guideResult" data-id={item.guide_id} onClick={clickGuide}>
            <div className="putMemberImg" data-id={item.guide_id}>
                <img src={item.api_selfie} id="memberImg" data-id={item.guide_id} />
            </div>
            <div className="guideContent" data-id={item.guide_id}>
                <div className="guideInformationArea" data-id={item.guide_id}>
                    
                    <span className="guideName" data-id={item.guide_id}>{item.guide_name} </span>
                    <img src={item.logo}/>
                    <span className="star" data-id={item.guide_id}><AiFillStar /></span>
                    <span className="guideStarNum" data-id={item.guide_id}>{item.avg_star}</span><br />
                    <span className="guideTitle" data-id={item.guide_id}> {item.level}</span>
                </div>
                <div className="guideRecommend" data-id={item.guide_id}>
                    <span className="guideRecommendIcon" data-id={item.guide_id}><i><AiOutlineLike /></i></span>&thinsp;
                    <span className="guideRecommendContent" data-id={item.guide_id}>{item.viewpoint}</span>
                </div>
                <div className="guideLocation" data-id={item.guide_id}>
                    <i className='locationIcon' data-id={item.guide_id}><IoLocationSharp /></i>
                    <span className="locationContent" data-id={item.guide_id}>{item.location}</span>
                </div>
            </div>

        </div>
    );
}

export default Search_results;