import React from 'react'
import './Call.css';

const Call = ({handleButton}) => {
  
  const buttonTexts = [
    "Call Add",
    "Instant Call",
    "Today",
    "Tomorrow",
    "Yesterday",
    "This Week",
    "This Month",
    "Calendar View",
    "Summary",
    "Last Month",
    "All Pending Calls",
    "Print",
    "All Balance Amount"
  ];

  return (
    <>
    {buttonTexts && buttonTexts?.map((res,index)=>(
      <button type="button" class="btn btn-primary " onClick={()=>handleButton(index)} >{res}</button>
    ))}

      <div className='des-heading'>
        <h1 className='heading-1'>
        Search Customer : </h1>

        <p className='para'>Input atleast 1 Filter for Quick Search / Input any 1 field also possible for Search</p>

      </div>


    </>
  )
}

export default Call