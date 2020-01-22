import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row skill">
      <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>
            <div className="nine columns main-col">
              {
        resumeData.portfolio && resumeData.portfolio.map((item)=>{
          return(
              <div className="projectName">
            <h4>{item.name}</h4>
            <p className="stack"><strong>Stack: </strong>{item.Stack}</p>
            {
                               Object.entries(item.description).map(([Item, Roles]) => {
                                   return(<li>{Roles}</li>)
                               })
            }
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