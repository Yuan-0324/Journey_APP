import { useHistory } from "react-router-dom";
const Create_Group_Area = ({setCreatGroupaArea}) => {

    let history = useHistory();
    const swichRoute = () =>{
        setCreatGroupaArea(false)
        history.push(`/Society`);  
    }

    return (  
        <div className="create-group-area">
            <div className="btn" onClick={swichRoute}>Back</div>
                <div>建立社團</div>

                <div className='d-flex align-items-center m-2 cursor-pointer'>
            
                    <div className='selfie rounded-circle overflow-hidden mr-3'>
                        <img className='img-fluid' src="/img/1.png" alt="" />
                    </div>

                    <div className='d-flex flex-column'>

                        <div className='a-black'>Jack</div>

                        <div>管理員</div>

                    </div>
                </div>

                <div>
                    <div>社團名稱</div>
                    <input type="text" />
                </div>

                <div>
                    <div>邀請加入</div>
                    <input type="text" />
                </div>

                <input type="button" value="建立" />

        </div>
    );
}
 
export default Create_Group_Area;