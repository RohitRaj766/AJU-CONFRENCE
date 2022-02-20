import React,{useState, useEffect} from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import IconButton  from '@material-ui/core/Button';
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

// const useStyle = makeStyles((theme) =>({
//     toTop:
//     {
//         zIndex:2,
//         position:'fixed',
//         bottom:'5rem',
//         backgroundColor:'#DCDCDC',
//         color:'black',
//         // "&:hover, &.Mui-focusVisible":{
//         //     transition:'0.3s',
//         //     color:'#397BA6',
//         //     backgroundColor:'#DCDCDC'
//         // },
//         right: '5%'
//     }

// }))

const Scroll = (
    showBelow
    
    ) =>{
  
// const classes = useStyle();

const [show, setShow] = useState(showBelow ? false : true)

const handleScroll = () =>{
if(window.pageYOffset > showBelow){
    if(!show) setShow(true)
}    

else{
     if(show) setShow(false)     
    }

}

useEffect(() => {

    if(showBelow){
        window.addEventListener(`scroll`,handleScroll)
        return () => window.removeEventListener(`scroll`,handleScroll)
    }
})



const handleClick  = () =>{
    window[`scrollTo`]({top:0, behavior:`smooth`})
}


return <div>

{/* <button>asdfasfsdfadf</button> */}


        {show &&
    <button className="btn-danger on_top_button" onClick={handleClick} >
        
    </button>
    }
    </div>


    }

export default Scroll