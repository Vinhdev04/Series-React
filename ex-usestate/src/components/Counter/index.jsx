import React, { useState } from 'react';
function Counter(props) {
    //TODO:  `Initial state` chỉ dùng cho lân đầu tiên
    const [counter,setCounter] = useState(0);
    // console.log(`Initial value: ${counter}`); // Output: 0
    const handleIncrease = (e) => {
       //❌ #?: Kết quả sẻ là ? -> react sẻ hiểu là 1 -> Lấy counter ban đầu = 0 sau đó tăng + 1 
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // Output: 2

        //TODO:  Sử dụng `Set state` với `callback`✅
        setCounter(prev => prev + 3);
    }
    

    return (
        <>
            <h1 style={{color: "#9a9acd"}}>Value: {counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </>
    );
}

export default Counter;