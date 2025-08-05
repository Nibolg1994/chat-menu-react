import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "./CategoryCard";

const CategorySlider = ({ categories, selected, onSelect }) => {
    const scrollRef = useRef(null);
    const cardRefs = useRef({});
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const amount = 150;
        el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    };

    useEffect(() => {
        const el = scrollRef.current;
        const key = selected?.title?.toLowerCase();
        const selectedCard = cardRefs.current[key];

        if (el && selectedCard) {
            requestAnimationFrame(() => {
                const elRect = el.getBoundingClientRect();
                const cardRect = selectedCard.getBoundingClientRect();
                const scrollLeft = el.scrollLeft;

                const offset = cardRect.left - elRect.left - elRect.width / 2 + cardRect.width / 2;

                let newScrollLeft = scrollLeft + offset;
                newScrollLeft = Math.max(0, Math.min(newScrollLeft, el.scrollWidth - el.clientWidth));

                el.scrollTo({ left: newScrollLeft, behavior: "smooth" });
            });
        }
    }, [selected]);

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* Левая стрелка */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition hover:scale-110 shadow-md"
                    style={{
                        backgroundColor: "rgba(62, 125, 174, 0.07)",
                        color: "#3e7dae",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <ChevronLeft size={14} strokeWidth={2.5} />
                </button>
            )}

            {/* Правая стрелка */}
            {canScrollRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition hover:scale-110 shadow-md"
                    style={{
                        backgroundColor: "rgba(62, 125, 174, 0.07)",
                        color: "#3e7dae",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <ChevronRight size={14} strokeWidth={2.5} />
                </button>
            )}

            {/* Слайдер категорий */}
            <div
                ref={scrollRef}
                className="overflow-x-auto no-scrollbar scroll-smooth px-2"
            >
                <div className="flex gap-4 py-2 w-max">
                    {categories.map((cat) => (
                        <div
                            key={cat.title}
                            ref={(el) => (cardRefs.current[cat.title.toLowerCase()] = el)}
                        >
                            <CategoryCard
                                label={cat.title}
                                icon={cat.icon}
                                selected={selected === cat.title.toLowerCase()}
                                onClick={() => onSelect(cat)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;