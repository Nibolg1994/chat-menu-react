import React from "react";
import clsx from "clsx";
import CategoryCard from "./CategoryCard.jsx";

const CategorySlider = ({ categories, selected, onSelect }) => {
    return (
        <div className="flex gap-3 overflow-x-auto px-4 py-2">
            {categories.map((cat) => (
                <CategoryCard
                    key={cat.label}
                    label={cat.label}
                    icon={cat.icon}
                    selected={selected === cat.label.toLowerCase()}
                    onClick={() => onSelect(cat)}
                />
            ))}
        </div>
    );
};

export default CategorySlider;