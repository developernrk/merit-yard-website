import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home: React.FC = () =>{
    return(
        <>
            <Navbar/>
            <h2 className={"sample-text text-center p-4 mt-lg-4 "}>Abhishek 
            </h2>
            <Footer/>
        </>
    )
}
export default Home;