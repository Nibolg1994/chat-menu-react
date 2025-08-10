import React from "react";
import clsx from "clsx";

const DangerButton = ({ children, onClick, className = "", ...props }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "bg-red-500",
                "text-white",
                "py-2.5 px-4",
                "rounded-xl font-semibold text-sm",
                "shadow-md hover:shadow-lg",
                "hover:bg-red-600 active:bg-red-700",
                "transition-all duration-200 ease-in-out",
                "focus:outline-none focus:ring-2 focus:ring-red-300",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default DangerButton;