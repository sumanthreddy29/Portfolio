import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Experience from './components/Experience';
import Skills from './components/Skills';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Education resumeData={resumeData}/>
        <Experience resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;