import { Plus } from "lucide-react";
import React from "react";
import clsx from "clsx";
import PrimaryButton from "./PrimaryButton";
import { useCart } from "../context/CartContext";

const DishCard = ({
                      id,
                      title,
                      description,
                      price,
                      image,
                      onViewDetails,
                      cartQuantity = 0,
                  }) => {
    const { addItem } = useCart();
    return (
        <div
            className="relative bg-white rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition overflow-hidden group cursor-pointer"
            onClick={onViewDetails}
        >
            {/* Обёртка для картинки с серым фоном */}
            <div className="bg-gray-100 w-full aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-3">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-base font-medium">{price} ₽</span>

                    {/* Кнопка добавления в корзину с акцентным кольцом */}
                    <button
                        className={clsx(
                            "relative p-2 rounded-full transition-transform hover:scale-105",
                            "bg-primary/10 hover:bg-primary/20 text-primary",
                            "ring-1 ring-brandBlue/20 hover:ring-2 hover:ring-brandBlue/40",
                            "shadow-sm shadow-brandBlue/10"
                        )}
                        onClick={(e) => {
                            e.stopPropagation();
                            addItem({id, title, price, image })
                        }}
                    >
                        <Plus size={20} />
                        {cartQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[11px] font-semibold w-5 h-5 flex items-center justify-center rounded-full">
      {cartQuantity}
    </span>
                        )}
                    </button>
                </div>

                {/* Кнопка "Детали" */}
                <div className="mt-3">
                    <PrimaryButton
                        className="w-full text-sm py-1.5"
                        onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails();
                        }}
                    >
                        Детали
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
