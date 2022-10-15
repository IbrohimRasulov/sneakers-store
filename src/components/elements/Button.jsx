import React from "react";

const Button = ({value, className, type, onClick}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            >
            {value}
        </button>
    );
}

export default Button;