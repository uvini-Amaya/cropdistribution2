import React from 'react';

import "./Search.css";
import { Button } from 'react-bootstrap';
// import Button from '../Button/Button';
function Search() {
  return (
   
        <section className="background">
                <div class="searchflex">
                    
                    <input type="search" placeholder="Search Here" className="searchbox" />
                    <Button  class="button3">
                    {/* <Button name="Get your Offer" onClick={(value)=>alert(value)}/> */}
                    <i class="fas fa-search"></i>
                    </Button>
                </div>
            
        </section>
  )
}

export default Search;
