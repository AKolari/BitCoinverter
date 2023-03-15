import axios from "axios"
import { useState, useEffect } from "react";

function CurrentRates({BitRates, setBitRates}){

    
    const [order, setOrder]=useState(true);
    
    function orderManager(){
        
        if(!order){
            setOrder(true)
        }
        else{
            setOrder(false)
        }
        
        sortData();
    }
    
    function sortData(){
        
       let SortedData={};
       if(order) {
        SortedData={...Object.keys(BitRates).sort((a, b)=>BitRates[b].rate_float-BitRates[a].rate_float)};
       }
       else{
        SortedData={...Object.keys(BitRates).sort((a, b)=>BitRates[a].rate_float-BitRates[b].rate_float)};

       }
       let tempArray={};
       
       for(let i in SortedData){
           tempArray[SortedData[i]]=BitRates[SortedData[i]];
       }
       setBitRates(tempArray)
       
    }






    

    return <div className="container" style={{
        textAlign:'center',
        color: 'white',
        
    }}>
        <div  className="row bg-dark p-5 border border-2 border-secondary rounded-5 ">
        <div className="col">
        {Object.keys(BitRates).map((cur)=>{
            return <p key={`${cur}`} >
               The conversion rate from <b>{BitRates[cur].description}</b> <i>{`(${BitRates[cur].code})`}</i> to <b>Bitcoin</b> is <b>{BitRates[cur].rate_float}</b> to <b>1</b>
            </p>

        })}
        </div>
        <div className="col">
         {Object.keys(BitRates).map((cur)=>{
            return <p key={`${cur}`} >
               The conversion rate from <b>Bitcoin</b> to <b>{BitRates[cur].description}</b> <i>{`(${BitRates[cur].code})`}</i> is <b>{1/BitRates[cur].rate_float}</b> to <b>1</b>
            </p>
        
        })}
        </div>
        </div>

        <button className="m-2" onClick={orderManager}>Sort Exchange Rates</button>

       
        
        
        
        
        
          
    </div>


}

export default CurrentRates;



