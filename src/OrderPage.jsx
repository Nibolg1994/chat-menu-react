import React, { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";

const OrderPage = () => {
    const [orderType, setOrderType] = useState("restaurant");
    const [time, setTime] = useState("asap");
    const [customTime, setCustomTime] = useState("");
    const [peopleCount, setPeopleCount] = useState(1);

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Оформление заказа</h1>

            {/* Тип заказа */}
            <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-700 mb-2">Тип заказа</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => setOrderType("restaurant")}
                        className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                            orderType === "restaurant"
                                ? "bg-brandBlue text-white"
                                : "bg-white text-gray-700 border border-gray-300"
                        }`}
                    >
                        В ресторане
                    </button>
                    <button
                        onClick={() => setOrderType("delivery")}
                        className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                            orderType === "delivery"
                                ? "bg-brandBlue text-white"
                                : "bg-white text-gray-700 border border-gray-300"
                        }`}
                    >
                        Доставка
                    </button>
                </div>
            </div>

            {/* Время */}
            <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-700 mb-2">Время</h2>
                <div className="flex gap-2 mb-2">
                    <button
                        onClick={() => setTime("asap")}
                        className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                            time === "asap"
                                ? "bg-brandBlue text-white"
                                : "bg-white text-gray-700 border border-gray-300"
                        }`}
                    >
                        Как можно скорее
                    </button>
                    <button
                        onClick={() => setTime("custom")}
                        className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                            time === "custom"
                                ? "bg-brandBlue text-white"
                                : "bg-white text-gray-700 border border-gray-300"
                        }`}
                    >
                        Назначить время
                    </button>
                </div>
                {time === "custom" && (
                    <input
                        type="time"
                        value={customTime}
                        onChange={(e) => setCustomTime(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                )}
            </div>

            {/* Кол-во персон, если "в ресторане" */}
            {orderType === "restaurant" && (
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Количество персон</h2>
                    <input
                        type="number"
                        min="1"
                        max="20"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
            )}

            {/* Контакт */}
            <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-700 mb-2">Связаться с нами</h2>
                <a
                    href="tel:+79781234567"
                    className="block w-full text-center text-brandBlue font-medium underline"
                >
                    Позвонить: +7 (978) 123-45-67
                </a>
            </div>

            {/* Кнопка */}
            <PrimaryButton onClick={() => console.log("Продолжить к оплате")} className="w-full mt-6">
                Продолжить к оплате
            </PrimaryButton>
        </div>
    );
};

export default OrderPage;