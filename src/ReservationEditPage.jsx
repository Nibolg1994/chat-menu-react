import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import { ArrowLeft } from "lucide-react"; // или твоя иконка, если используешь react-icons
import { toast } from "react-toastify";

const ReservationEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [reservation, setReservation] = useState(null);
    const [peopleCount, setPeopleCount] = useState(1);
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetch(`http://chatmenu.ru/telegram/client/api/reservations/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReservation(data.reservation);
                    setPeopleCount(data.reservation.people_count);
                    setComment(data.reservation.comment || "");
                } else {
                    toast.error("Не удалось загрузить данные брони");
                }
            });
    }, [id]);

    const handleSave = async () => {
        const res = await fetch(`http://chatmenu.ru/telegram/client/api/reservations/${id}/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                people_count: peopleCount,
                comment
            })
        });

        const data = await res.json();
        if (data.success) {
            toast.success("Бронирование успешно обновлено");
            navigate(-1);
        } else {
            toast.error(data.message || "Ошибка при обновлении бронирования");
        }
    };

    if (!reservation) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />

            <div className="p-4">
                {/* Назад + Заголовок */}
                <div className="flex items-center gap-3 mb-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white p-2.5 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-900">
                        Редактирование брони
                    </h1>
                </div>

                {/* Форма */}
                <div className="bg-white rounded-lg shadow p-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Количество персон
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={peopleCount}
                            onChange={(e) => setPeopleCount(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Комментарий
                        </label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <PrimaryButton className="w-full" onClick={handleSave}>
                        Сохранить
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ReservationEditPage;
