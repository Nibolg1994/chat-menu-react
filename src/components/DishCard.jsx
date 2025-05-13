// src/components/DishCard.jsx
import React from "react";

const DishCard = ({ title, description, price, image }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-64 flex-shrink-0">
            <img
                src={image}
                alt={title}
                className="rounded-xl h-40 w-full object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
            <div className="mt-2 text-right font-semibold text-amber-600">
                {price} ₽
            </div>
        </div>
    );
};

export default DishCard;