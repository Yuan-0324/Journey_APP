import { useHistory } from "react-router-dom";

const Create_Group = ({setCreatGroupaArea}) => {

    let history = useHistory();
    const swichGroup = (e) =>{
        let groupId = e.target.dataset.club;
        history.push(`Society/group/${groupId}`);
        setCreatGroupaArea(true);
    }

    return ( 
        <div className='create-group d-flex btn' data--club='new' onClick={swichGroup}>
            <div className="create-group-btn h4">建立新社團</div>     
        </div>  
    );
}
 
export default Create_Group;