import Axios from 'axios';
import { useEffect, useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../../../context';

// 連結
// 刪除

const Personal_Followed = ({ followed }) => {

    const currentUser = useContext(Context).userInfo;
    const currentUserFollowed = useContext(Context).currentUserFollowed;
    const setCurrentUserFollowed = useContext(Context).setCurrentUserFollowed;
    const statue = useRef(false);

    const [state, setState] = useState({
        imgSrc: '',
        followedFirstName: '',
        followedLastName: '',
        followedId: ''
    })

    let getHeadshot = async () => {
        let result = await Axios.get('http://localhost:8000/personal/followed/headshot/' + followed.member_email);
        setState({
            ...state,
            ['imgSrc']: result.data.api_selfie,
            ['followedFirstName']: result.data.firstName,
            ['followedLastName']: result.data.lastName,
            ['followedId']: result.data.id
        })
    }

    let moveToFollower = (evt) => {
        window.location = `/personal/${state.followedId}`;
    }

    let removeFollow = () => {
        statue.current = true;
        let newList = currentUserFollowed.filter(follow => follow.member_email !== followed.member_email);
        setCurrentUserFollowed(newList);
        let deleteFollow = async () => {
            let data = {
                currentUserEmail: currentUser.email,
                followEamil: followed.member_email
            };
            await Axios.delete('http://localhost:8000/personal/current_user/followed_add', { data: data });
            console.log('delete');
        }

        deleteFollow();
    }

    useEffect(() => {
        getHeadshot();
        statue.current = false;
    }, [])

    return (
        <div className='follower-detail'>
            <img onClick={moveToFollower} src={state.imgSrc} alt="" />
            <div className='user-info'>
                <h1>{state.followedLastName} {state.followedFirstName}</h1>
                <h2>{followed.member_email}</h2>
            </div>
            <button onClick={removeFollow}>移除</button>
        </div>
    )
}

export default Personal_Followed