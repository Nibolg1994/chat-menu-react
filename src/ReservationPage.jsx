import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryButton from "./components/PrimaryButton";
import Header from "./components/Header";
import {useRestaurant} from "./context/RestaurantContext.jsx";

const ReservationPage = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [peopleCount, setPeopleCount] = useState(1);
    const [comment, setComment] = useState("");
    const {restaurant} = useRestaurant();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Шапка */}
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />

            {/* Контент с прокруткой */}
            <div className="flex-1 px-4 py-6 pb-28 overflow-auto">
                {/* Назад + заголовок */}
                <div className="flex items-center gap-3 mb-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                        aria-label="Назад"
                    >
                        <FaArrowLeft className="text-gray-600" />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-800">
                        Бронирование столика
                    </h1>
                </div>

                {/* Поля */}
                <div className="space-y-6">
                    {/* Дата */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Дата</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Время */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Время</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Персоны */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Количество персон</label>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={peopleCount}
                            onChange={(e) => setPeopleCount(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Комментарий */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                        <textarea
                            rows="3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Например, нужен столик у окна"
                            className="w-full p-2 border border-gray-300 rounded-md resize-none"
                        />
                    </div>
                </div>
            </div>

            {/* Фиксированная кнопка */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-100 px-4 pb-4 pt-2 shadow-inner">
                <PrimaryButton
                    onClick={async () => {
                        const res = await fetch('http://chatmenu.ru/telegram/client/api/reservation/create', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                restaurant_id: restaurant.id,
                                date,
                                time,
                                people_count: Number(peopleCount),
                                comment
                            })
                        });

                        const result = await res.json();
                        console.log(result);
                    }}
                    className="w-full"
                >
                    Забронировать столик
                </PrimaryButton>
            </div>
        </div>
    );
};

export default ReservationPage;
