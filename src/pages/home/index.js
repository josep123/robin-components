import React from "react";
import HeavyBanner from '../../components/heavyBanner';
import Products4 from '../../components/products4';

import Banner from '../../components/banner';



function Home () {

    return(
        <content>
            <HeavyBanner />
            <br />
            <br />
           <center> <h3>Novedades</h3></center>
           
           <br />
            <br />
            <Products4 />
            <br />
            <br />
          
            <div className="corte"></div>
            <br />
            <br />
            <Banner />
            <br />
            <br />
           <center> <h3>Te puede interesar</h3></center>
           <br />
            <br />
            <Products4 />
            <br />
            <br />
            <div className="corte"></div>

        </content>
    )
}

export default Home;