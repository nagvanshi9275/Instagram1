

import React from 'react'


export default function Pichai(props){
    
   const[King, Kong] = React.useState() 
   
   function bang(){
       
     Kong(pre => !pre)  
       
   }
   
   const bigi = {
   backgroundColor:King? 'white': 'blue' ,  
     color: King? 'black': 'white' 
   }
    
    
    return(
       
       <div>
       
       <div>
       
       <h6 className="text">Suggestion for You</h6>
       
       </div>
       
       <div className="parents">
       
       <div className="pic1">
       
       <img className="lisa" src={props.img}/>
       
       </div>
       
       <div className="su">
       
       <h4 className="amit">{props.name}</h4>
       <p className="follow">Followed by</p>
       <p className="cup">{props.india}</p>
       <button style={bigi} className="btn" onClick={bang}>{King?"requested": "Follow"}</button>
       </div>
    
       
       </div>
       
       
       
       </div> 
        
        
        
    )
    
    
    
}







