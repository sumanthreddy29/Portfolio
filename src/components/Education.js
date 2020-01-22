import React, { Component } from 'react';
import { FaMapMarkerAlt,FaGraduationCap } from 'react-icons/fa';

export default  class Education extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                           <h2><a href={item.link} target="_blank">{item.UniversityName}</a></h2>
                         <h4>  <FaMapMarkerAlt size="20"    /> {item.Location}</h4>
                          <p className="info">
                         <FaGraduationCap/> {item.specialization}&emsp; <em className="date">{item.MonthOfStarting} {item.YearOfStarting}-{item.MonthOfPassing} {item.YearOfPassing}</em>
                      <br/>GPA: {item.GPA}  </p>
                          
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
       

       

      </section>
    );
  }
}