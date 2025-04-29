import { DownloadOutlined } from '@ant-design/icons';
import { Button } from "antd";
import React from 'react';
function TabButton({children }) {
    const showMessage = (e)=>{
        alert("Hello");
        
    }
    return (
        <>
            <div>
            {/* Cách 1 */}
                <Button type="primary">{children}</Button>
                <Button icon={<DownloadOutlined/>} style={{margin:"10px"}}  shape="circle"></Button>
                <Button icon={<DownloadOutlined/>} shape="round" loading="true" onClick={showMessage}>{children}</Button>
            </div>  
        </>
    );
}

// function TabButton({content }) {
//     return (
//         <>
//             <div>
//             {/* Cách 2 */}
//                 <Button type="primary">{content}</Button>
//                 <Button icon={<DownloadOutlined/>} style={{margin:"10px"}}  shape="circle"></Button>
//                 <Button icon={<DownloadOutlined/>} shape="round" loading="true">{content}</Button>
//             </div>
//         </>
//     );
// }

export default TabButton;