import Personal_Collection from "./Personal_Collection";

const Collection_List = () => {
    return (
        <div className="collection">
            <h2 className="head-topic">我的收藏</h2>
            {/* -----------------Container------------------- */}
            <Personal_Collection />
            {/* --------------------------------------------- */}
        </div>
    )
}

export default Collection_List;