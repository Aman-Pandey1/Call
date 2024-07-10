import { useState } from 'react';
import './App.css';
import Call from './Call';
import Calladd from './Calladd';
import Today from './Today';
import Calender from './Calender';
import Summery from './Summery';
function App({}) {
  const [selectBtn,setSelectBtn] =useState(0);
  const handleButton=(index)=>{
setSelectBtn(index)
console.log(index)
  }
  
  
  return (
   <>
   <Call handleButton={handleButton}/>
   {selectBtn === 0 &&(
    
   <Calladd/>
   )}
   
    {selectBtn === 2 &&(
    
    <Today/>

    )}
      
      {selectBtn === 3 &&(
    
    <Today/>

    )}
      
      {selectBtn === 4 &&(
    
    <Today/>

    )}
      
      {selectBtn === 5 &&(
    
    <Today/>

    )}
      
      {selectBtn === 6 &&(
    
    <Today/>

    )}
       
       {selectBtn === 7 &&(
    
    <Calender/>

    )}
    {selectBtn === 8 &&(
    
      <Summery/>
  
      )}
        {selectBtn === 9 &&(
    
    <Today/>

    )}
        {selectBtn === 10 &&(
    
    <Today/>

    )}
        {selectBtn === 12 &&(
    
    <Today/>

    )}
   </>
  );
}

export default App;
