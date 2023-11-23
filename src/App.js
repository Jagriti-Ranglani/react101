import './App.css';
import { useState } from 'react';
// import About from './components/About';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");  // whether dark or light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b2132";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils | Dark Mode";

      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing!";
      // }, 1500);
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils | Light Mode";
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alerts alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <Routes>
            <Route path='/about' element={<About />}>
            </Route>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
            </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
