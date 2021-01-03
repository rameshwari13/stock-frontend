import React from 'react';
import "./home.css";
import Navbar from './navbar';


export default function Home(){
    return(
        <div>
            <Navbar/>
            {/* <h1 className=" text-info text-center text-capitalize m-4 p-4"></h1> */}
            <img src="./image/PO05Sellingstocks.jpg"  alt=""/>
            
        </div>
    )
}