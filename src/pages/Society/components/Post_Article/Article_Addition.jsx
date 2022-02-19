import React from 'react';
import '../../stylesheet/Society.css';

const Article_Addition = ({data, onDeleteBrick, onSetInput }) => {

    return ( 
        <div className='d-flex art-bg'>

            <div className='cancel btn d-flex justify-content-center align-items-center' onClick={()=>onDeleteBrick(data.place)}>
                <div className='cancel'>x</div>
            </div>

            <div className='in-bg ml-3 p-0' dangerouslySetInnerHTML={{__html: data.html}}
                onInput={onSetInput} onChange={onSetInput} onPaste={onSetInput}
            />

        </div>
     );
}
 
export default Article_Addition;