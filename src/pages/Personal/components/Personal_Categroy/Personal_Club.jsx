const Personal_CLub = ({ club }) => {
    return (
        <div className="club-attended" >
            {/* <img src={ club.clubImg } alt="" /> */}
            <div style={{ backgroundImage: `url('${club.clubImg}')` }}></div>
        </div>
    )
}

export default Personal_CLub;