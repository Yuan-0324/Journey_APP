import Society_Post from "./Society_Post/Society_Post";
import Society_Group from './Society_Group';
import Society_Group_Bar from "../Society_Group_Bar/society_Group_Bar";

const Society_Right = ({showGroup, currentParams}) => {

    return ( 
        <div className="col-right">

        {currentParams.id ?  <Society_Group_Bar id={currentParams}/>: (showGroup ? <Society_Group/> : <Society_Post/>)}
   
        </div>
     );
}
 
export default Society_Right;