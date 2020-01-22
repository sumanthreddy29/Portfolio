import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
export default  class Experience extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="work">
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3><a href={item.link} target="_blank" >{item.CompanyName}</a></h3>
                           <h5>  <FaMapMarkerAlt size="20"  /> {item.Location}</h5>
                          <p className="info">
                          {item.specialization} &emsp; 
                           <em className="date">{item.MonthOfStarting} {item.YearOfStarting}-{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>

                           <p className="stack"><strong>Stack: </strong>{item.Stack}</p>
                          <h1><span> Roles & Responsibilities</span></h1>
                           {
                               Object.entries(item.Achievements).map(([Item, Roles]) => {
                                   return(<div><li>{Roles}</li></div>)
                               })

                           }

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