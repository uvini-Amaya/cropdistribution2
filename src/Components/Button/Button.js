// import React from 'react';
// import  "./Button.css";


//  function Button({onClick}) {
//   return (
//     <button className="button" >
//         Login
//     </button>
//   )
// }

// export default Button;



// import React from 'react';
// import  "./Button.css";










import React from 'react';
import  "./Button.css";


 function Button({name,onClick}) {



  return (
    <button className="button" onClick={()=>onClick(name)}>
        {name}
    </button>
  )
}

export default Button;





