import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Farmer() {

    const [farmers,setFarmers]=useState([])

    useEffect(()=>{
        loadFarmers();
    },[]);

    const loadFarmers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/v1/farmer/getAllFarmers");
        console.log(result);
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className='table border shadow'>
                <thead>
                    <tr>

                    </tr>
                </thead>
                <td>
                    <tr>

                    </tr>
                </td>
            </table>
        </div>  
    </div>
  )
}

export default Farmer;