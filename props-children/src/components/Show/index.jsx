import React from 'react';
import TabButton from '../TabButton';


function Show(props) {
    return (
        <>
             {/* Cách 1 */}
            <TabButton>Submit</TabButton>
            <TabButton>Download</TabButton>

            {/* Cách 2
            <TabButton content="Submit"></TabButton>
            <TabButton content="Download"></TabButton> */}
        </>
    );
}

export default Show;