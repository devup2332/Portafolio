import React from "react";
import {SnackProps} from "../../models/SnackProps";

const SnackBar = ({message,open,setOpen,timer}:SnackProps) => {
    
    const closeSnackBar = () => {
        setOpen(false);
        clearTimeout(timer)
    }

    return (
        <div className={open?"snackbar-component visible": "snackbar-component"}>
            <span>{message}</span>
            <button type="button" onClick={closeSnackBar}>Close</button>
        </div>
    )
}

export default SnackBar
