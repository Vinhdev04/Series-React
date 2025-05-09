import { useState } from "react";
import './App.css';
import Menu from "./components/Menu.jsx";
import Tab from './components/Tab';
import DATA from "./data.js";
function App() {
  const [selected,setSelected] = useState();
  const handleSelect = (selectedButton) => {
    setSelected(selectedButton);
  }
  
  // cách 3: gán biến riêng
  let content = <p>Please click on button!</p>;
  if(selected) {
    content = (
      <ul class="list">
                  <h3>{DATA[selected].title}</h3>
                  <p>{DATA[selected].desc}</p> <pre>
                  <code>{DATA[selected].code}</code>
                </pre>
      </ul>
    );
  }
  
  return (
    <>
          <Menu className="tab"
            button={  
            <>
              <Tab onClick = {()=> {handleSelect("component")}}>Component</Tab>
              <Tab onClick = {()=> {handleSelect("jsx")}}>JSX</Tab>
              <Tab onClick = {()=> {handleSelect("props")}}>Props</Tab>
              <Tab onClick = {()=> {handleSelect("state")}}>State</Tab>
            </>
              }
            >
          </Menu>
          {/* Cách 1: Toán tử 3 ngôi */}
          {/* {(!selected) ? (
            <p>Please click on button!</p>
          ) : (
              <ul class="list">
                  <h3>{DATA[selected].title}</h3>
                  <p>{DATA[selected].desc}</p> <pre>
                  <code>{DATA[selected].code}</code>
                </pre>
              </ul>
          )} */}

           {/* Cách 2: Toán tử && */}
            {/* {(!selected) && (<p>Please click on button!</p>)}
            {selected && ( <ul class="list">
                  <h3>{DATA[selected].title}</h3>
                  <p>{DATA[selected].desc}</p> <pre>
                  <code>{DATA[selected].code}</code>
                </pre>
              </ul>)} */}

              {/* Cách 3:  */}
              {content}
    </>
  );
}

export default App;
