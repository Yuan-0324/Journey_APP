//-- 套件  --
import React, { useEffect,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import context from '../../../../../context';
// -- Components --
import Searching_Group from './Searching_Group';
import Searching_Member from './Searching_Member';
import axios from 'axios';
 
const Searching = () => {

   const currentUser = useContext(context);
   let userId = localStorage.getItem('id');

   const [seachResult, setSeachResult] = React.useState([]);
   const [seachGroupResult, setSeachGroupResult] = React.useState([]);

   useEffect(() => {
      axios.post('http://127.0.0.1:8000/search/random',{id: userId})
         .then(res=>{
            setSeachResult(res.data);
         })
         axios.post('http://127.0.0.1:8000/search/grouprand',{id: userId})
         .then(res=>{
            setSeachGroupResult(res.data);
         })
   }, []);

   const doTheSearch = (e) =>{
      axios.post('http://127.0.0.1:8000/search/member',{id: userId, typeInto:`%${e.target.value}%`})
         .then(res=>{
            let result = res.data;
            setSeachResult(result);
         });
      axios.post('http://127.0.0.1:8000/search/group',{id: userId, typeInto:`%${e.target.value}%`})
         .then(res=>{
            let result = res.data;
            setSeachGroupResult(result);
         })  
   }

   const [searchSwich, setSearchSwich] = React.useState(false);
   
   return (

      <div className='searching-area d-flex flex-column align-items-center'>

         <div className="searching d-flex align-item-center">
            <div className='search-icon pl-2 pt-1 pr-1'><FontAwesomeIcon icon={faSearch} /></div>
            <input className='search-input' type="text" placeholder='搜尋用戶/社團' onChange={doTheSearch} onInput={doTheSearch} onPaste={doTheSearch} onKeyDown={doTheSearch}/>
         </div>

         {searchSwich ? <Searching_Group seachGroupResult={seachGroupResult}/> : <Searching_Member seachResult={seachResult}/> }

         <div className="demo text-center cursor-pointer">
            <a onClick={()=>setSearchSwich(!searchSwich)}>{ searchSwich ? '用戶搜尋結果' : '社團搜尋結果' }<span></span></a>
         </div>

      </div>
   
   );

}
 
export default Searching;