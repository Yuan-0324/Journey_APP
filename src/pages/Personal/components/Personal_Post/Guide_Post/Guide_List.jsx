import emptyStar from '../../../../../images/empty.png';
import shineStar from '../../../../../images/star.png';

const Guide_List = () => {
    return (
        <div className="review">
                    <h2>嚮導評價</h2>
                    <div className="my-review">
                        <div className="review-guide">
                            <img src="https://picsum.photos/id/1074/300/300" alt=""></img>
                            <h1>Amber</h1>
                            <h5>2020/11/09</h5>
                        </div>
                        <form method="post" className='review-form'>
                            <div className='star-rate'>
                                <h5>嚮導評分</h5>
                                <div id="stars0" className="review-stars">
                                    <img src={emptyStar} alt="" />
                                    <img src={emptyStar} alt="" />
                                    <img src={emptyStar} alt="" />
                                    <img src={emptyStar} alt="" />
                                    <img src={emptyStar} alt="" />  
                                </div>
                                <div id="comment0" className="review-stars-score"></div>
                            </div>
                            <input style={{display:'none'}} id="reviewStar0" name='reviewStar' type="number"></input>
                            <textarea name="reviewContent" maxLength="50" id=""></textarea>
                            <input className="review-form-send" type="submit" value='送出'></input>
                        </form>
                    </div>
                </div>
    )
}

export default Guide_List;