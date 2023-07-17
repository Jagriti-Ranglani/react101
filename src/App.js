import './App.css';
import { useState } from 'react';
// import About from './components/About';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';

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
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alerts alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
