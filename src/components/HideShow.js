import React from 'react';
import {useState} from 'react';


export default function HideShow() {
    
    const [show, setShow]=useState(false)

  return <div>
     <h4 onClick={() =>setShow(!show)} >Organising Secretary</h4>
<div className="show-button">
{
show? <div></div>:null
}
{/* <button >toggle</button> */}

</div>


  </div>;
}
