import Society_Post from "./Society_Post/Society_Post";
import Society_Group from './Society_Group';
import Society_Group_Bar from "../Society_Group_Bar/society_Group_Bar";

const Society_Right = ({showGroup, currentParams,justForGroup,setGroupPicsave,setGroupPicSit}) => {

    return ( 
        <div className="col-right">

        {currentParams.id ?  <Society_Group_Bar id={currentParams} justForGroup={justForGroup} setGroupPicsave={setGroupPicsave} setGroupPicSit={setGroupPicSit}/>: (showGroup ? <Society_Group/> : <Society_Post/>)}
   
        </div>
     );
}
 
export default Society_Right;