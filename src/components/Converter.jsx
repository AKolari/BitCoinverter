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
                <span class="input-group-text border border-2 border-dark rounded-start-3">{BitRate.code}</span>
                <input placeholder={BitRate.description} onChange={contentUpdateHandler} type="number" class="form-control border border-2 border-dark rounded-end-3" aria-label="Amount"/> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                {!!content && <h6> This is equivalent to {(content/BitRate.rate_float).toFixed(2)} Bitcoin </h6>}
            </div>
            
        </div>
    </div>

}

export default Converter