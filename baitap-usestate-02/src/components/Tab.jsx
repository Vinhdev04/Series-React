import React from 'react';

function Tab({children,onSelect}) {
    return (
        <>
            <div>
                <button onClick={onSelect}>{children}</button>
            </div>
        </>
    );
}

export default Tab;