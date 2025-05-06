import React, { useState } from 'react';
function Notice(props) {
    const [IsAlertVisible,setIsAlertVisible] = useState(false);
    const [IsActived,setIsActived] = useState(false);

    const handleActive = (e) => {
        setIsAlertVisible(!IsAlertVisible);
    }

    const handleConfirm = (e) => {
        setIsActived(!IsActived);
        setIsAlertVisible(!IsAlertVisible);
    }

    const handleCancel = (e) => {
        setIsAlertVisible(!IsAlertVisible); 
    }

    return (
        <>
        {!IsActived && !IsAlertVisible && 
        (<button className='btn-active' onClick={handleActive}>Active</button>   )}
            {(IsAlertVisible) && (
                <div class="alert-message">
                    <h2>Warning!</h2>
                    <p>Are you sure you want to active this mode?</p>
                    <div className='control-btn'>
                        <button className='confirm-btn' onClick={handleConfirm}>Confirm</button>
                        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            )}
            
            {(IsActived) && (<h3 className='active-message'>Activated</h3>)}
        </>
    );
}

export default Notice;