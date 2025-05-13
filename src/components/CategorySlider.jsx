import React from "react";
import clsx from "clsx";

const CategorySlider = ({ categories, selected, onSelect }) => {
    return (
        <div className="flex gap-3 overflow-x-auto px-4 py-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={clsx(
                        "px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition",
                        selected === cat
                            ? "bg-amber-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategorySlider;