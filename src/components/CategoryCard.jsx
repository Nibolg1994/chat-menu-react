import React from "react";
import clsx from "clsx";
import IconCategory from "./IconCategory.jsx";

function CategoryCard({ label, selected, icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "flex flex-col items-center justify-center w-24 h-24 rounded-2xl px-3 py-3 transition-all duration-200 ease-out",
                "border text-gray-700 shadow-sm hover:shadow-md hover:scale-[1.03]",
                selected
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:text-primary"
            )}
        >
            <div className="mb-1">
                <IconCategory name={icon} className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium text-center leading-tight">{label}</span>
        </button>
    );
}

export default CategoryCard;