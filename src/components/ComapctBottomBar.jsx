import React from "react";
import PrimaryButton from "./PrimaryButton.jsx";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {useCart} from "../context/CartContext.jsx";

const CompactBottomBar = () => {
    const navigate = useNavigate();
    const { totalItems, totalPrice } = useCart();
    if (totalItems === 0) return null;



    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] px-4 py-4">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-4">
                {/* Информация о товарах и цене */}
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 tracking-wide">
                        В корзине {totalItems} товар(ов)
                    </span>
                    <span className="text-xl font-semibold text-gray-900 leading-snug">
                        {totalPrice} ₽
                    </span>
                </div>

                {/* Кнопка перехода */}
                <PrimaryButton
                    className="w-full xs:w-auto flex items-center justify-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition"
                    onClick={() => navigate("/cart")}
                >
                    <ShoppingCart size={18} />
                    Перейти в корзину
                </PrimaryButton>
            </div>
        </div>
    );
};

export default CompactBottomBar;