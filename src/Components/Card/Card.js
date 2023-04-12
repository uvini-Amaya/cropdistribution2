import React from 'react';
import { useState, useEffect } from 'react';
import "./Card.css";
import Card from '@mui/material/Card';
import StarOutlineIcon  from '@mui/icons-material/StarOutline';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import StarIcon from '@mui/icons-material/Star';
import {Link} from "@mui/material";
import Divider from "@mui/material/Divider";
import img247 from "../../Images/img247.jfif";

import List1 from "../../pages/NumberList/NumberList";

function Card2(){

        return(

    
        <div className="row justify-content-start bg-light ">
        <div className="col-3">
            <img src={img247} alt="1" className='img247'/>
        </div>

        <div className="col-3">
                <div className="mt-3" >Crop Name</div>
        </div>

        <div className="col-1">
            <div className="mt-3">Crop Id</div> 
        </div>

        <div className="col-1">
            <div className="mt-3">Amount</div> 
        </div>



        <div className="col-2">
            {/* <div className="flex35"> */}
                {/* <div className="mt-3"><StarIcon style={{ color: 'yellow' }} variant="middle"/></div> */}
                <div className="mt-3"><b>Price</b></div>
            {/* </div> */}

        </div>

        <div className="col-1">
        <div className="mt-3"><StarIcon style={{ color: 'yellow' }} variant="middle"/></div>
        </div>


        <div className="col-1">
            <div className="mt-3"><farmer_name/></div>
        </div>

    </div>

    )
}
export default Card2;