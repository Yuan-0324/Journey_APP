//-- 套件 --
import React,{useContext} from 'react';
import { useParams } from 'react-router-dom'

// -- Style --
import './stylesheet/Society.css';
//-- Components --
import Society_Categroy from "./components/Society_Categroy/Society_Categroy";
import Society_Right from './components/Society_Right/Society_Right';
import Context from '../../context';

const Society_Container = () => {
    const currentUser = useContext(Context).userInfo;
    let currentParams = useParams();
    const [showGroup, setShowGroup] = React.useState(false);
    const GroupSwicher = (e)=>{
        setShowGroup(e);
    }

    const [justForGroup, setjustForGroup]=React.useState('')
    const [groupPicsave, setGroupPicsave] = React.useState();
    const [groupPicSit, setGroupPicSit] = React.useState();
    


    return (
        <Context.Provider value={{
            userInfo: currentUser,
            // currentUserFollowed: currentUserFollowed,
            // currentUserImg: currentUserImg,
            // setCurrentUserFollowed: setCurrentUserFollowed,
            // viewUserInfo: viewUserState.viewUserInfo,
            // viewUserImg: viewUserState.viewUserImg
        }}>
            <section className='society-section'>
                <div className='society-container mx-auto'>
                    {/* 左方功能表 */}
                    <Society_Categroy showGroup={showGroup} GroupSwicher={GroupSwicher}  setjustForGroup={setjustForGroup} groupPicsave={groupPicsave} groupPicSit={groupPicSit}/>
                    {/* 右方顯示內容 */}
                    <Society_Right showGroup={showGroup} currentParams={currentParams} justForGroup={justForGroup} setGroupPicsave={setGroupPicsave} setGroupPicSit={setGroupPicSit}/>
                    {/* <Society_Post /> */}
                </div>
            </section>
        </Context.Provider>
    )
}

export default Society_Container;