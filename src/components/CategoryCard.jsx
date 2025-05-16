import React from "react";
import { Utensils, Leaf, IceCream } from "lucide-react"; // или заменишь на свои SVG/иконки
import clsx from "clsx";
import IconCategory from "./IconCategory.jsx";

const iconMap = {
    burgers: <Utensils size={28} />,
    salads: <Leaf size={28} />,
    desserts: <IceCream size={28} />,
};

function CategoryCard({ label, selected, icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "flex flex-col items-center justify-center w-20 h-20 rounded-xl px-2 py-3 transition",
                "bg-gray-50 border shadow-md",
                selected
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-200 text-gray-800 hover:border-gray-300 hover:shadow-lg hover:scale-110 hover:text-blue-500"
            )}
        >
            <div className="mb-1">
                <IconCategory name={icon} className="w-8 h-8"/>
            </div>
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}

export default CategoryCard;