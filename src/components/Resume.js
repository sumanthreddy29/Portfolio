import React, { Component } from 'react';
export default  class Resume extends Component {
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
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}&emsp; <em className="date">{item.MonthOfStarting} {item.YearOfStarting}-{item.MonthOfPassing} {item.YearOfPassing}</em>
                       <br/>GPA:{item.GPA}  </p>
                          
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