// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not.......
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(54 40 74)';
      document.body.style.color = 'white';
      showAlert('Dark mode has been activated', 'success');
      setInterval(() => {
        document.title = 'DM-X | dipsundarmajhi@gmail.com';
      }, 1300)
      setInterval(() => {
        document.title = 'DM-X | Welcome';
      }, 2000)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been activated', 'success');
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar link1="Home" link2="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}


export default App;
