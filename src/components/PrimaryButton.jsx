import React from "react";

const PrimaryButton = ({ children, onClick, className = "", ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`
                bg-[#5688b6] 
                text-white 
                py-2 
                px-4 
                rounded-xl
                font-medium 
                shadow 
                hover:bg-[#4a7aa3] 
                active:bg-[#3e6d93] 
                transition 
                duration-200 
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;