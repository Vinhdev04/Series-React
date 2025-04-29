
import { Button } from "antd";
import React from "react";

//#TODO: Component cha xử lý và Truyền hàm qua props cho Component Con
function TabButton({children,onSelect}) {
    return (
        <>
        <Button
            type="primary"
            style={{ margin: "0 20px" }}
            // Gán hàm xử lý sự kiện được truyền từ cha
            onClick={onSelect}
        >
            {children}
        </Button>
        </>
    );
}

export default TabButton;
