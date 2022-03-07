import s_pic from '../../../../images/Home/main//weather.jpg';

const My_Group = ({elm,swichGroup,gb}) => {
     // 預設社團圖
     const orignPic ={
        width : 520,
        height : 110,
        marginTop : 0,
        marginLeft : 0
    }

    return ( 
        <div className='group-swich mt-3 float-left ml-3 cursor-pointer' data-club={elm.societyID}  onClick={swichGroup}>
            
            <div  data-club={elm.societyID}>
                {elm.bg_pic!=undefined ? <img src={`data:image/png;base64,${elm.bg_pic}`} alt="" data-club={elm.societyID}/> : <img style={orignPic} src={s_pic} data-club={elm.societyID}/>} 
            </div>

            <div className='text-align-left' data-club={elm.societyID}> 
                <p className='m-1 ml-2' data-club={elm.societyID}>{elm.society_name}</p>
                <span className='leef' data-club={elm.societyID}>{elm.society_num}成員</span>
            </div>
        
          {gb && <button className='btn btn-outline-success text-align-rigth' data-club={elm.societyID}>加入社團</button>}


        </div>
);
}
 
export default My_Group;