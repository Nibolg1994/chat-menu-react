import React from "react";
import {FaMinus, FaPlus, FaTrashAlt} from "react-icons/fa";
import PrimaryButton from "./components/PrimaryButton";
import {useCart} from "./context/CartContext";

const CartPage = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem, totalPrice } = useCart();

    return (
        <div className="max-w-screen-md mx-auto px-4 py-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-5">Корзина</h1>

            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 py-10">
                    Ваша корзина пуста.
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
                        onClick={() => {
                            window.location.href = "/order"; // или navigate("/order") если используешь useNavigate()
                        }}
                    >
                        Перейти к оформлению заказа
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
};

export default CartPage;