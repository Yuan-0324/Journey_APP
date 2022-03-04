import { useHistory } from "react-router-dom";

const Create_Group = ({setCreatGroupaArea}) => {

    let history = useHistory();
    const swichGroup = (e) =>{
        window.scrollTo(0, 0);
        let groupId = e.target.dataset.club;
        history.push(`Society/group/${groupId}`);
        setCreatGroupaArea(true);
        window.scrollBy(0,0);
    }

    return ( 
        <div className='create-group btn text-align-center' data-club='0' onClick={swichGroup}>
            建立新社團 
        </div>  
    );
}
 
export default Create_Group;