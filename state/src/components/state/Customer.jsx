import { useState } from 'react';

function Customer({ info }) {
    const [customerInfo, setCustomerInfo] = useState({
        name: info.name,
        email: info.email
    });

    const handleChangeInfo = () => {
        setCustomerInfo({
            name: 'Nguyễn Văn A',
            email: 'pcv.fed@gmail.com'
        });
    };

    return (
        <>
            <h2>Name: {customerInfo.name}</h2>
            <p>Email: {customerInfo.email}</p>
            <button type="button" onClick={handleChangeInfo}>Change Info</button>
        </>
    );
}


export default Customer;
