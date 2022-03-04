import {useContext} from 'react';
import finishImg from '../../../../images/Success-unscreen.gif';
import context from '../../../../context';



const Finish_Section = () => {

    const currentUser = useContext(context).userInfo;

    let moveTo = () => {
        window.location = `/GuidePersonal/${currentUser.guide_id}`;
    }

    return (        
        <div className="finishWindows">
            <div className="finishContent">
                <p className='gp1'>恭喜你！成功加入</p>
                <p className='gp2'>嚮導行列</p>
                <img src={finishImg}/>
                <p className='gp3'>*如需更改資料，可隨時至「個人設定」-&gt;「嚮導設定」中修改。</p>
                <button onClick={moveTo}>我的嚮導主頁→</button>
            </div>
        </div> 
    );
}

export default Finish_Section;