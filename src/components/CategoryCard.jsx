import React from "react";
import { Utensils, Leaf, IceCream } from "lucide-react"; // или заменишь на свои SVG/иконки
import clsx from "clsx";

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
                "flex flex-col items-center justify-center w-24 h-24 rounded-xl px-2 py-3 transition",
                selected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            )}
        >
            <div className="mb-1">{iconMap[icon]}</div>
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}

export default CategoryCard;