import React from "react";
import "./Home.css";
import Product from "./Product";
import background_img from "./pics/background.png"


function Home() {
    return(
        <div className="home">
            <div className="home_container">
                <img src={background_img} alt="shop img" className="home_image" />
            </div>

            <div className="home_row">
                <Product />
                <Product />
            </div>

            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home_row">
                <Product />
            </div>

        </div>
    );
}

export default Home