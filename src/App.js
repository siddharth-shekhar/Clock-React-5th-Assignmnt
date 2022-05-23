import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './components/Toggle';

const App = () => {
  const [toggled,setToggled] = useState(false);

  let time= new Date().toLocaleTimeString();
  let date= new Date().toLocaleDateString();

  const [ctime,setCtime] = useState(time);
  const [cdate,setCdate] = useState(date);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000);
  return (
    <div className="App">
      <ToggleSwitch label="Date" onChange={(event)=> setToggled(event.target.checked)}/>
      <p>The Switch is {toggled? "on":"OFF"}.</p>
      <h3>{ctime}</h3>
      <h3>{toggled}?{cdate}:""</h3>
    </div>
  );
}

export default App;
