import React from 'react';
import './EnergyInfo.css';

import image1 from '../../Assets/Image 5.png'
import image2 from '../../Assets/Image 4.png';

import image3 from '../../Assets/Image 6.png';
import image4 from '../../Assets/Image 7.png';

const GreenEnergy = () => {
  return (
    <div className="container">
      <div className="section">
        <h2>Green Energy Products</h2>
        <p>
          Lorem ipsum dolor sit amet. Aut dolores animi in rerum galisum in
          voluptatem Quis quo alias numquam. Ut dignissimos nulla quo dolores
          obcaecati est facilis quia est velit consequatur qui perspiciatis
          quidem in molestias ipsum aut commodi magni.

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <div className="images">
          <img src={image1} alt="Green Tech" />
          <img src={image2} alt="Solar Panels" />
        </div>
      </div>
      
      <div className="section">
        <h2>Reduce Carbon Footprint</h2>
        <p>
          Vel totam nemo rem provident laborium quo voluptatum reprehenderit
          qui sint corrupti non aperiam nesciunt eum nemo facilis id quis
          laborem.

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <div className="images">
          <img src={image3} alt="Wind Turbines" />
          <img src={image4} alt="Green Energy Plant" />
        </div>
      </div>
    </div>
  );
};

export default GreenEnergy;
