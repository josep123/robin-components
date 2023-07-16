import React from "react";
import HeavyBanner from '../../components/heavyBanner';
import Products4 from '../../components/products4';

import Banner from '../../components/banner';



function Home () {

    return(
        <content>
            <HeavyBanner />
            <h3>Novedades</h3>
            <Products4 />
          
            <div className="corte"></div>
            <Banner />
            <h3>Te puede interesar</h3>
            <Products4 />
            <div className="corte"></div>


            

        </content>
    )
}

export default Home;