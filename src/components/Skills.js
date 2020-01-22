import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default  class Skills extends Component {
  render() {
      const settings = {
      infinite: true,
      dots:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
          autoplay:true,
    };
    let resumeData = this.props.resumeData;
    return (
      <section id="skills">
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            
            <div className="nine columns main-col">
   				<div className="bars">
 <Slider {...settings}>
     {
 resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <div className="progress">
<CircularProgressbar value="100" text={item} />
                      </div>
                    )
 })
}
         
        </Slider>
   				</div>
   			</div>
         </div>
      </section>
    );
  }
}