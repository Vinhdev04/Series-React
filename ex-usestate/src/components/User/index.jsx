import React, { useState } from 'react';

function User(props) {
    //TODO: Sử dụng `Initial state` với `callback` nếu có xử lý logic đi kèm
    const [info,setInfo] = useState({
        name: "Ana",
        age: 20,
        address: "Hà Tĩnh, VN"
    })

    //TODO: Error: ❌
    // const handleUpdate = (e) => {
    //     setInfo({
    //         ...info,
    //         email: "hana@gmail.com"
    //     })
    //     // #? Kết quả? -> "email":"hana@gmail.com" sẻ ghi đè Object khởi tạo ban đầu
    // }

    //TODO: Success: ✅
    const handleUpdate = (e) => {
        setInfo({
            ...info,
            email: "hana@gmail.com"
        })
        // #? Kết quả? -> "name":"Ana","age":20,"address":"Hà Tĩnh, VN","email":"hana@gmail.com"
    }
    return (
        <div>
            <ul>
                <li>{JSON.stringify(info)}</li>
            </ul>
            <button onClick={handleUpdate}>Update Info</button>
        </div>
    );
}

export default User;