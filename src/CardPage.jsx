import React, { useEffect } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import Header from "./components/Header";
import { useCart } from "./context/CartContext";

const CartPage = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem, totalPrice } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        if (cartItems.length === 0) {
            const timeout = setTimeout(() => {
                navigate("/");
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [cartItems, navigate]);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Шапка — на всю ширину, без отступов */}
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />

            {/* Контент корзины */}
            <div className="max-w-screen-md mx-auto px-4 py-6">
                {/* Назад + Заголовок */}
                <div className="flex items-center gap-3 mb-5">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-white p-2.5 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-900">Корзина</h1>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">
                        Ваша корзина пуста. Возвращаем в меню...
                    </div>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />

                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-xs text-gray-500">
                                        {item.price.toFixed(0)} ₽ × {item.quantity}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                                    >
                                        <FaMinus className="text-gray-600 text-sm" />
                                    </button>
                                    <span className="w-6 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                                    >
                                        <FaPlus className="text-gray-600 text-sm" />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-600 transition"
                                    aria-label="Удалить"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
                            <span>Итого:</span>
                            <span>{totalPrice.toFixed(0)} ₽</span>
                        </div>

                        <PrimaryButton
                            className="w-full py-3 text-base font-medium"
                            onClick={() => navigate("/order")}
                        >
                            Перейти к оформлению заказа
                        </PrimaryButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
