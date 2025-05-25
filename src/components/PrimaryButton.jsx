import React from "react";
import clsx from "clsx";

const PrimaryButton = ({ children, onClick, className = "", ...props }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "bg-brandBlue",
                "text-white",
                "py-2.5 px-4",
                "rounded-xl font-semibold text-sm",
                "shadow-md hover:shadow-lg",
                "hover:bg-brandBlue/90 active:bg-brandBlue/80",
                "transition-all duration-200 ease-in-out",
                "focus:outline-none focus:ring-2 focus:ring-brandBlue/30",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;