import React, { useState } from 'react';


const orders = [100,200,300];
function Total(props) {
    //TODO: NO: ❌
    // const total = orders.reduce((total,current) => {
    //     return  total + current;
    // })
    // console.log(total);

    const [price,setPrice] = useState(()=>{
        //TODO: YES: ✅
        const total = orders.reduce((total,current) => total + current
        )
        console.log(total);
        return total;
    });

    const handleUpdate = () => {
        setPrice(price + 100);
    }

    
    return (
        <div>
            <h1>{price}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default Total;