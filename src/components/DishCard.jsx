// src/components/DishCard.jsx
import React from "react";

const DishCard = ({ title, description, price, image }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full flex-shrink-0 ">
            <div className="bg-[#f4f4f4] rounded-xl h-40 w-full mb-3 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-contain h-full w-full"
                />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
            <div className="mt-2 text-right font-semibold text-amber-600">
                {price} ₽
            </div>
        </div>
    );
};
export default DishCard;