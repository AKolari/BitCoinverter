import { useState, useEffect } from "react";



function Converter({BitRate}){
    const [content, setContent]=useState(NaN)
    const contentUpdateHandler=(e)=>{
        setContent(e.target.value)
    }
    


    return <div>
        <input type='number' placeholder={BitRate.code} onChange={contentUpdateHandler}>
            
            
        </input>
        <p>{content/BitRate.rate_float}</p>
    </div>

}

export default Converter