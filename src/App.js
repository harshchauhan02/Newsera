import './App.css';

import React, { Component } from 'react'
import {Navbar} from './components/Navbar';
import { News } from './components/News';
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = "9a619e27fee24c3f9ba800eee7402a43"
  state = {
    progress : 0,
  }
  setProgress=(progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>

 {/* <div style={{ margin: '20px' }}>
           <h2>Welcome to Your App</h2>
           <p>This is a test message to check the output.</p>
         </div> */}

        <Navbar />
        <LoadingBar color = '#f11946' progress ={this.state.progress}/>
        
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} key="general" apikey={this.apikey} category="General" />}> </Route>
        <Route path="/business" element={<News setProgress={this.setProgress} key="business"  apikey={this.apikey} category="business" />}> </Route>
        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainement" apikey={this.apikey} category="entertainment" />}> </Route >
        <Route path="/health" element={<News setProgress={this.setProgress} key="health" apikey={this.apikey} category="health" />}> </Route >
        <Route path="/science" element= {<News setProgress={this.setProgress} key="science" apikey={this.apikey} category="science" />} ></Route >
        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" apikey={this.apikey} category="sports" />}> </Route >
        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" apikey={this.apikey} category="technology" />}> </Route >
      </Routes >
     
      </div >
    )
  }


}




