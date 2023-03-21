import React from 'react';
import  "./Button.css";


export default function Button({name,onClick}) {
  return (
    <Button className="button" onClick={()=>onClick(name)}>
        {name}
    </Button>
  )
}

