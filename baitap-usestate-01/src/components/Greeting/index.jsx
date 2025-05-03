import React, { useState } from 'react';

function Greeting(props) {
    const [greeting,setGreeting] = useState("Hello guy!");
    
    const updateGreeting = (e) => {
        let currentHours = new Date().getHours();
        if(currentHours >=5 && currentHours < 12){
            setGreeting("Good morning guy!");
        }else if(currentHours >= 12 && currentHours < 18){
            setGreeting("Good afternoon guy!");
        }else{
            setGreeting("Good night guy!");
        }
    }
    return (
        <div>
            <h4>{greeting}</h4>
            <button onClick={updateGreeting}>Update Greeting</button>
        </div>
    );
}

export default Greeting;