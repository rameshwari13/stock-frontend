import React from 'react';
import Navbar from './navbar';


export default function AboutUs(){
    return(
        <div>
            <Navbar/>
            <div className="container mt-2">
            <h1 className=" text-info text-center text-capitalize m-4 p-4">Simplified Inventory & Warehousing Management Software</h1>
            <p><b>The purpose of stock management software is to maintain an optimal stock level,
                 track goods during transport between locations, receive new items, 
                 manage warehouse processes such as picking, packing, and shipping, prevent product obsolescence and spoilage,
                 and ensure your products are never out of stock.</b></p>
                 
             </div>
                 </div>

    )
}