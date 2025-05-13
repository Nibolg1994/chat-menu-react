// src/components/CategoryToggle.jsx
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoryToggle = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-white shadow-md rounded-full p-2 flex items-center justify-center"
        >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
    );
};

export default CategoryToggle;