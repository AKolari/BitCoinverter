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






    

    return <div style={{
        textAlign:'center'
    }}>
       
        {Object.keys(BitRates).map((cur)=>{
            return <p key={`${cur}`} >
               The conversion rate from {BitRates[cur].description} to Bitcoin is {BitRates[cur].rate_float} to 1
            </p>

        })}

        <button onClick={orderManager}>Sort Exchange Rates</button>

       
        
        
        
        
        
          
    </div>


}

export default CurrentRates;



