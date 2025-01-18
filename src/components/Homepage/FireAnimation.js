//copy and paste the html code here in a react div
import React from 'react';
import './FireAnimation.css'

function FireAnimation(){
    return (
        <div>
          <div className='fire-animation'>
            <div id="container">
  <div class="fire">
    <div class="fire-left">
      <div class="main-fire"></div>
      <div class="particle-fire"></div>
    </div>
    <div class="fire-main">
      <div class="main-fire"></div>
      <div class="particle-fire"></div>
    </div>
    <div class="fire-right">
      <div class="main-fire"></div>
      <div class="particle-fire"></div>
    </div>
  </div>
  <div class="head">
    <div class="eyes">
      <div class="pupil"> </div>
    </div>
        <div class="mouth"> </div>
  </div>
    <div class="cheek-right"></div>
    <div class="cheek-left"></div>
</div>
</div>
        </div>
    )
};

export default FireAnimation;