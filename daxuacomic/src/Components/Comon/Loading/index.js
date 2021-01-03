import React from "react";
import './style.scss'
const Loading = () => {
    return (
        <div className="lds-ripple">
            <div></div><div></div>
        </div>
    )
}
export default React.memo(Loading)