import { useState, useEffect } from 'react'

import CurrentRates from './components/CurrentRates'
import CurrentTime from './components/CurrentTime';
import Converter from './components/Converter';

import axios from 'axios';


function App() {
  const[BitRates, setBitRates]=useState({});
  const [dataTime, setDataTime]=useState({});
  const [fetchTime, setFetchTime]=useState(null);
  const [component, setComponent]=useState('conversions')

  const fetchAPIData= async function(){   
    const APIData=await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    setDataTime(APIData.data.time.updated);

    const destructuredBPIData=Object.keys(APIData.data.bpi).reduce(function(acc, currentCode){
       acc[currentCode]=APIData.data.bpi[currentCode];
       return acc;
    }, {});
    setBitRates(destructuredBPIData);
    }
    useEffect(function(){
    fetchAPIData(); 
 }, [dataTime])



 const conversionHandler=()=>{
  setComponent('conversions')
 }
 const USDHandler=()=>{
  setComponent('USD')
 }
 const EURHandler=()=>{
  setComponent('EUR')
 }
 const GBPHandler=()=>{
  setComponent('GBP')
 }



  return (
    <div style={{
      textAlign:'center',
      height: '100vh', 
    }}>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Bitcoin Converter</span>
          <button onClick={conversionHandler} >View Conversions</button>
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency Converter
              </button>
              <ul class="dropdown-menu">
                <button className="dropdown-item" type="button" onClick={USDHandler} >USD Converter</button>
                <button className="dropdown-item" type="button" onClick={EURHandler} >EUR Converter</button>
                <button className="dropdown-item" type="button" onClick={GBPHandler} >GBP Converter</button>
              </ul>
            </div>
   
        </div>
      </nav>
      
      
      

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        width: '100vw'
      }}>
      <div className='py-5 w-100'>
        {component === 'conversions' && <CurrentRates BitRates={BitRates} setBitRates={setBitRates}></CurrentRates>}
        {component === 'USD' && <Converter BitRate={BitRates.USD}></Converter>}
        {component === 'EUR' && <Converter BitRate={BitRates.EUR}></Converter>}
        {component === 'GBP' && <Converter BitRate={BitRates.GBP}></Converter>}
       
      </div>
      

      
      <div className="fixed-bottom">
      <CurrentTime dataTime={dataTime} setDataTime={setDataTime} fetchAPI={fetchAPIData} fetchTime={fetchTime} setFetchTime={setFetchTime}></CurrentTime>
      </div>
      </div>
    </div>
  )
}

export default App
