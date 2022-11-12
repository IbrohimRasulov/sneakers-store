import React from "react";

const Button = ({text, className, type, onClick}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            >
            {text}
        </button>
    );
}

export default Button;