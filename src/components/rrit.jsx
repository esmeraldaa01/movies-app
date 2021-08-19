import React from 'react';
import { useState } from 'react';


export const rrit = () => {
    const [vlera , setVlera] = useState(0)
const onRRitje = () => {
    setVlera(vlera+1)
} 
    return (
        <div>
              <h1>{vlera}</h1>
<button onClick={onRRitje}>RRit</button> 
        </div>
    )
}

   
  
