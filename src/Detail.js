import React from "react";
import './Detail.sass';
const Detail = () =>{
    return(
        <div className="Detail">
<div className="slider-wrapper">
  <div className="slider">
    <div className="slide-navigation__squares">
      <div className="squares-wrapper">
        <div className="squares-slider">
           <span className="square"></span>
           <span className="square"></span>
           <span className="square red"></span>
           <span className="square "></span>
           <span className="square"></span>
          </div>
      </div>
      
    </div>
    <div className="slides-container">
      <div className="slide-wrapper">
        <div className="slide" data-order="1">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/photo-1428908728789-d2de25dbd4e2.jpeg" alt="" />
          <div className="slide-content">
            <h1>Discover</h1>
            <h2>The warm heart of Nordic Beauty</h2>
            <div className="slide-txt">
              <p>The Nordic Countries varied landscapes offer wonderful scenery for any journey, no matter by land or sea.  How you choose to travel will depend on where you go.</p>
              <button>Show regions</button>
            </div>
          </div>
         </div>
        <div class="slide" data-order="2">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/todo-banner.jpg" alt="" />
          <div className="slide-content">
            <h1>To do</h1>
            <h2>Close encounters with nature</h2>
            <div className="slide-txt">
              <p>There's never a bad time to visit the Nordic countries! When you should visit will depend on which types of activities or natural phenomena interest you most.</p>
              <button>Activities</button>
            </div>
          </div>
         </div>
        <div className="slide" data-order="3">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/plan-banner_copy.jpg" alt="" />
          <div className="slide-content">
            <h1>Plan</h1>
            <h2>Top attractions in the nordics</h2>
            <div className="slide-txt">
              <p>June, July and August is the best time to travel, this is when you can expect the warmest weather, longest daylight hours and best availability of outdoor activities.</p>
              <button>Reservations</button>
            </div>
          </div>
         </div>
      </div>
    </div>
    <div className="slide-navigation__txt">
      <ul>
        <li><span data-order="1">Discover</span></li>
        <li><span data-order="2">To do</span></li>
        <li><span data-order="3">Plan</span></li>
      </ul>
    </div>
  </div>
</div>
        </div>

    )
}

export default Detail