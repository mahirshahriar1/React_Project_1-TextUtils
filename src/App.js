import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert(
         "Dark mode has been enabled",
          "success"
      );
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert( 
        "Light mode has been enabled",
        "success"
      );
    }
  }
 

  return (
    <>      
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} mode={mode}/>
      <div className="container my-5">
            <TextForm showAlert={showAlert} heading ="Enter your text to analyze below" mode={mode}/>            
            {/* <About/> */}
      </div>
    </>

  );
}

export default App;
