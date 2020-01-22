import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/sumanth.jpeg" alt="Sumanth Reddy" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.firstname} {resumeData.lastname}</span>
                     <br></br>
       						   <span>
                    <FaMapMarkerAlt /> {resumeData.address}
                    </span>
                    <br></br>
                    <span> <IoMdMail/> {resumeData.emailId}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}