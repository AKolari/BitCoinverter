import { useState, useEffect } from "react";



function Converter({BitRate}){
    const [content, setContent]=useState(NaN)
    const contentUpdateHandler=(e)=>{
        setContent(e.target.value)
    }
    


    return <div class="container">
        <h1>Currency Converter</h1>
        <div class="row justify-content-center">
            <div class="col input-group mb-3 w-50 justify-content-center" >
                <span class="input-group-text">{BitRate.code}</span>
                <input placeholder={BitRate.description} onChange={contentUpdateHandler} type="number" class="form-control" aria-label="Amount"/> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                {!!content && <p> This is equivalent to {content/BitRate.rate_float} Bitcoin </p>}
            </div>
            
        </div>
    </div>

}

export default Converter