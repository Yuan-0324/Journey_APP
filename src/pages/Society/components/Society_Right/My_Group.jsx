import s_pic from '../../../../images/Home/main//weather.jpg';
import { IoIosAdd } from "react-icons/io";

const My_Group = ({elm,swichGroup,gb}) => {
     // 預設社團圖
     const orignPic ={
        width : 520,
        height : 190,
        marginTop : 0,
        marginLeft : 0
    }

    return ( 
        <div className='group-swich mt-3 float-left ml-3 cursor-pointer' data-club={elm.societyID}  onClick={swichGroup}>
            
            <div data-club={elm.societyID} className='h-100 d-flex justify-content-center'>
                {elm.bg_pic!=undefined ? <img className="img-fulid" src={`data:image/png;base64,${elm.bg_pic}`} alt="" data-club={elm.societyID}/> : <img className="h-100" style={orignPic} src={s_pic} data-club={elm.societyID}/>} 
            </div>

            <div className='text-align-left' data-club={elm.societyID}> 
                <span className='group-name m-1 ml-2' data-club={elm.societyID}>{elm.society_name}</span>
                <span className='leef' data-club={elm.societyID}>{elm.society_num}成員</span>
            </div>
        
          {gb && <div className='add-togroup d-flex justify-content-center align-items-center' data-club={elm.societyID}><IoIosAdd /></div>}


        </div>
);
}
 
export default My_Group;