

import React from 'react'

import Pichai from './Main'

import Data from './Data'

export default function Musk(){
    
    const Larry = Data.map(page => (
        
        <Pichai
        img={page.coverImg}
        name={page.title}
        india={page.price}
        />
        
    ))
    
    return(
       
       <div className="Baap">
       
       {Larry}
       
       
       </div>
        
        
        
        
    )
    
    
    
    
    
}








