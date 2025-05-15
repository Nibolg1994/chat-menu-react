import React from "react";
import clsx from "clsx";
import CategoryCard from "./CategoryCard.jsx";

const CategorySlider = ({ categories, selected, onSelect }) => {
    return (
        <div className="relative">
            {/* Градиенты по краям */}
            <div
                className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent z-10"/>
            <div
                className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent z-10"/>

            {/* Контейнер со скроллом */}
            <div className="overflow-x-auto no-scrollbar">
                <div className="flex gap-4 px-4 py-2 w-max">
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
            </div>
        </div>
    );
};

export default CategorySlider;