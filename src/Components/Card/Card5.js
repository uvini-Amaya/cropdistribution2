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
import img1 from "../../Images/img1.jpg";
import img983 from "../../Images/img983.jpg";
import { Nav} from 'react-bootstrap';



import IMAGES from '../../Images/Indeximg';

import ListOfProjects from './ListOfewProjects';
import Button from '../Button/Button';

import img981 from "../../Images/img981.jfif";
import img982 from "../../Images/img982.jfif";

import img333 from "../../Images/img333.jfif";
import img444 from "../../Images/img444.jfif";

import img183 from "../../Images/img183.jfif";
import download from "../../Images/download.jfif";

// const IMAGES={
//   logo1:require("../../Images/img1.jpg").default,
//   logo2:require("../../Images/img1.jpg").default,
//   logo3:require("../../Images/img1.jpg").default,
//   logo4:require("../../Images/img1.jpg").default,
//   logo5:require("../../Images/img1.jpg").default,
//   logo6:require("../../Images/img1.jpg").default,
// }

const cropList = ['Carrot', 'Beans', 'Watermellon','Tomato','Banana'];
const amountList = ['12kg', '25kg', '10kg','18kg','35kg'];
const idList = ['001', '002', '005','123','312'];
const ratingList = ['4.3', '3.3', '2.8','3.7','4.9'];
const priceList = ['21000lkr', '43000lkr', '12000lkr','10123lkr','31042lkr'];
const farmerIdList = ['005', '009', '125','543','201'];


function Card2(){


    // const renderListOfCropImagess = (image) => {
    //     return image.map(image => <li>{image}</li>)
    //   }
    
    // {images.map((e,i) =>
    //     <ListOfImages
    //     photo={e.photo}
    //     text={e.text}
    //     key={i}
    //     />
    // )}


    const renderListOfCropNames = (name) => {
        return name.map(name => <li>{name}</li>)
      }
    
    
      const renderListOfCropAmounts = (amount) => {
        return amount.map(amount => <li>{amount}</li>)
      }
    
      const renderListOfCropIds = (id) => {
        return id.map(id => <li>{id}</li>)
      }
    
    
      const renderListOfCropPrices = (prices) => {
        return prices.map(price => <li>{price}</li>)
      }
    
      const renderListOfCropRatings = (ratings) => {
        return ratings.map(rating => <li>{rating}</li>)
      }
    
      const renderListOfFarmerId = (farmerids) => {
        return farmerids.map(farmerid => <li>{farmerid}</li>)
      }

      // const renderListOfImages = (images) => {
      //   return images.map(image => <li>{image}</li>)
      // }

        return(

    
        <div className="row justify-content-start bg-success border-right " >
        {/* // <div className="col-3">
        //     <img src={img247} alt="1" className='img247'/>
        // </div> */}

        {/* <div className="col-3">
                {renderListOfImages(imageList)}
        </div> */}


        <div className="col-2">
          <div className='down'>
             <img src={img247} alt="1" className='img247'/>
             <img src={img981} alt="2" className='img247'/>
             <img src={img982} alt="3" className='img247'/>
             <img src={img183} alt="4" className='img247'/>
             <img src={img983} alt="5" className='img247'/>
             <img src={download} alt="6" className='img247'/>
             <img src={img333} alt="7" className='img247'/>
             <img src={img444} alt="8" className='img247'/>
             </div> 
        </div> 


        {/* <div className="col-3">
                <div className="img247" >{renderListOfCropNames(cropList)}</div>
        </div> */}


        <div className="col-1">
            <div className="as1">Carrot</div> 
            <div className="as1">Beans</div> 
            <div className="as1">Watermellon</div> 
            <div className="as1">Tomato</div> 
            <div className="as1">GreenChillie</div> 
            <div className="as1">Banana</div> 
            <div className="as1">Radish</div> 
            <div className="as1">Lemon</div>

        </div>

        <div className="col-1 ">
        <div className="as1">176</div> 
            <div className="as1">061</div> 
            <div className="as1">002</div> 
            <div className="as1">903</div> 
            <div className="as1">654</div> 
            <div className="as1">012</div> 
            <div className="as1">544</div> 
            <div className="as1">065</div>
        </div>

        <div className="col-1">
        <div className="col-1">
            <div className="as1">12kg</div> 
            <div className="as1">25kg</div> 
            <div className="as1">10kg</div> 
            <div className="as1">18kg</div> 
            <div className="as1">35kg</div> 
            <div className="as1">28kg</div> 
            <div className="as1">15kg</div> 
            <div className="as1">45kg</div>

        </div> 
        </div>



        <div className="col-1"> 
            <div className="as1">21000lkr</div> 
            <div className="as1">43000lkr</div> 
            <div className="as1">12000lkr</div> 
            <div className="as1">10123lkr</div> 
            <div className="as1">35000lkr</div> 
            <div className="as1">24000lkr</div> 
            <div className="as1">15000lkr</div> 
            <div className="as1">35000lkr</div> 

            {/* <div className="flex35"> */}
                {/* <div className="mt-3"><StarIcon style={{ color: 'yellow' }} variant="middle"/></div> */}
                {/* <div className="mt-3"><b>Price</b></div> */}
            {/* </div> */}

        </div>

        <div className="col-1">
            {/* <div className="mt-3"><farmer_name/></div> */}
        <div className="as1">2022/11/18</div> 
        <div className="as1">2022/11/20</div> 
        <div className="as1">2022/11/21</div> 
        <div className="as1">2022/11/21</div> 
        <div className="as1">2022/11/23</div> 
        <div className="as1">2022/11/25</div> 
        <div className="as1">2022/11/22</div> 
        <div className="as1">2022/11/24</div> 
        </div>


        <div className="col-1">
            {/* <div className="mt-3"><farmer_name/></div> */}
        <div className="as1">2022/11/26</div> 
        <div className="as1">2022/11/28</div> 
        <div className="as1">2022/12/01</div> 
        <div className="as1">2022/11/30</div> 
        <div className="as1">2022/11/29</div> 
        <div className="as1">2022/12/02</div> 
        <div className="as1">2022/12/01</div> 
        <div className="as1">2022/12/05</div> 
        </div>


         {/* <div className="col-2"> */}
            {/* <div className="mt-3"><farmer_name/></div> */}
        {/* <div className="as1">Siril Somarathne</div> 
        <div className="as1">Punchihewa</div> 
        <div className="as1">Mahila Weerarathne</div> 
        <div className="as1">Nihal Suraweera</div> 
        <div className="as1">Rathnayaka Herath</div> 
        <div className="as1">Ajitha Nauyana</div>  */}
        {/* </div> */}

        <div className="col-1">
          <Nav.Link className="as1"><Link to={'/Siril Somarathne'} >Siril Somarathne </Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/Punchihewa'} >Punchihewa </Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/RathayakeHerath'} >Mahila Weerarathne</Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/SNihalSuraweera'} >Nihal Suraweera</Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/RathayakeHerath'} >Rathnayaka Herath</Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/AjithaNauyana'} >Ajitha Nauyana</Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/RathayakeHerath'} >Rathnayaka Herath</Link></Nav.Link>
          <Nav.Link className="as1"><Link to={'/AjithaNauyana'} >Liyanage Milton</Link></Nav.Link>
        </div>

        <div className="col-1">
        {/* <div className="mt-3"><StarIcon style={{ color: 'yellow' }} variant="middle"/></div> */}
        <div className="as1" align= 'center'>4.6</div> 
        <div className="as1">3.6</div> 
        <div className="as1">4.2</div> 
        <div className="as1">4.9</div> 
        <div className="as1">3.2</div> 
        <div className="as1">2.8</div> 
        <div className="as1">4.8</div> 
        <div className="as1">2.8</div> 
        </div>


        <div className="col-1">
          <div className="as2"><button className='btn1'>Add to Cart</button></div>
          <div className="as2"><button className='btn1'>Add to Cart</button></div>
          <div className="as2"><button className='btn1'>Add to Cart</button></div>
          <div className="as1"><button className='btn1'>Add to Cart</button></div>
          <div className="as1"><button className='btn1'>Add to Cart</button></div>
          <div className="as1"><button className='btn1'>Add to Cart</button></div>
          <div className="as1"><button className='btn1'>Add to Cart</button></div>
          <div className="as1"><button className='btn1'>Add to Cart</button></div>
        </div>

        <br/>

     

    </div>

    )
}
export default Card2;