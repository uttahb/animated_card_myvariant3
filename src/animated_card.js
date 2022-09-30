import React from "react";
// import env from 'env'
import "./main.css";
export const Animated_card = () => {
  return (
    <div class="center">
      <div class="property-card">
        <a href="#">
          <div class="property-image">
            <div class="property-image-title">
              {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
            </div>
          </div>
        </a>
        <div class="property-description">
          <h5>Card Title</h5>
          <p>
            Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
            Bingo. Lorem Ipum doth be hard. Lorem lorem lorem
          </p>
        </div>
        <a href="#">
          <div class="property-social-icons">
            {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
          </div>
        </a>
      </div>
    </div>
  );
};
export default Animated_card;
