import { useState } from "react";
import './App.css';
import Tab from './components/Tab';
import DATA from "./data.js";
function App() {
  const [selected,setSelected] = useState("component");
  const handleSelect = (selectedButton) => {
    setSelected(selectedButton);
  }
  console.log(selected);
  
  return (
    <>
          <menu className='tab'>
            <Tab onSelect = {()=> {handleSelect("component")}}>Component</Tab>
            <Tab onSelect = {()=> {handleSelect("jsx")}}>JSX</Tab>
            <Tab onSelect = {()=> {handleSelect("props")}}>Props</Tab>
            <Tab onSelect = {()=> {handleSelect("state")}}>State</Tab>
          </menu>
          <ul class="list">
              <h3>{DATA[selected].title}</h3>
              <p>{DATA[selected].desc}</p> <pre>
              <code>{DATA[selected].code}</code>
            </pre>
          </ul>
    </>
  )
}

export default App
