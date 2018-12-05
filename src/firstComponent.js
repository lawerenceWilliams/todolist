import React from 'react';

function FirstComponent(props){
    console.log('This Is props', props.items)
    return(

    
    <div>
        <h1>This Is My List</h1>
        <ul>
          {props.items.map((item, index)=>{
            return <li key={index}>{props.items[index]}</li>
          })}
          </ul>
    </div>    
    )
};

export default FirstComponent;