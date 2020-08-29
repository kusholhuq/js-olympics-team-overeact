import React from 'react';

export default function TaskCard(props){
  return (
    <div>
    <div className="border">
      {props.content}
    </div>
    <button onClick={()=>props.getTaskDetails(props.content)} className='btn btn-primary'>Details</button>
    </div>
  )
}
