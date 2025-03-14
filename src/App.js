import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Teacher from "./components/Teacher";
// import Student from "./components/Student";
// import Score from "./components/Score";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
       <Routes>
         <Route   path="/" element={<Hero/>}/> 
         {/* <Route  path="/teacher" element={<Teacher/>} /> */}
        {/* onAnnouncement={announceHandler} announcements={announcement}/>}   />    */}
         {/* <Route  path="/student" element={<Student/>} />  */}
          {/* announcements={announcement}/>}   />   */}
         {/* <Route path="/teacher/viewScore" element={<Score/>}/> */}
      </Routes>
       </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
