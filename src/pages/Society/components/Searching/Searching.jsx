//引入套件
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//引入components
import Searching_Group from './Searching_Group';
import Searching_Member from './Searching_Member';
 
const Searching = () => {

   const [searchSwich, setSearchSwich] = React.useState(false);
   
   return (
      <div className='searching-area d-flex flex-column align-items-center p-3'>
               
         <div className='society-toggle'>
            <div className="society-toggle-btn"><a href='/Society/Home'>社群</a></div>
            <div className="society-toggle-btn"><a href='/Society/Group'>社團</a></div>
         </div>

         <div className="searching m-4 d-flex">
            <div className='search-icon pl-2'><FontAwesomeIcon icon={faSearch} /></div>
            <input className='search-input' type="text" placeholder='搜尋用戶/社團' />
         </div>

         {searchSwich ? <Searching_Group /> : <Searching_Member /> }

         <div className="demo text-center cursor-pointer">
            <a onClick={()=>setSearchSwich(!searchSwich)}>{ searchSwich ? '用戶搜尋結果' : '社團搜尋及果' }<span></span></a>
         </div>

      </div>
   );

}
 
export default Searching;