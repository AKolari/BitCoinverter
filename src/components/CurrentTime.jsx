import axios from "axios"
import { useState, useEffect } from "react";

function CurrentTime({dataTime, setDataTime, fetchAPI, fetchTime, setFetchTime}){

    
    
    



    function clickHandler(e) {
       

    
      if(Date.now()/1000-fetchTime>300){
        fetchAPI();
        setFetchTime(Date.now()/1000);
      }
      else{
        alert(`You must wait 5 minutes before refreshing. You have ${(fetchTime+300-Date.now()/1000).toFixed(0)} seconds remaining`)
      }

      
    }
 


   
    
    
    return <div style={{
        textAlign:'center'
    }}>
      <button onClick={clickHandler} >Click to Update Rates</button>
      <p>Time data retrieved: {JSON.stringify(dataTime)}</p>
        
    </div>

}


export default CurrentTime;



