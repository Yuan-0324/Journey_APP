
import FirstImage from "./FirstImage"
import SecondImages from './SecondImages'
import ThirdImage from './ThirdImage'
import FourthImage from './FourthImage'
const ActivityConductImages = ({data}) => {
console.log(data);
    return (
        <div className='activityImage'>
        
            <div className="activityImageItemFS">
                <FirstImage data={data} />
                <SecondImages data={data} />
            </div>
            <div className="activityImageItemTF">
                <ThirdImage data={data}/>
                <FourthImage data={data} />
            </div>
        </div>
    )
}

export default ActivityConductImages