// components/UserStatusBadge.jsx
import React from "react";

const UserStatusBadge = ({ status }) => {
    return (
        <span className="ml-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
            {status}
        </span>
    );
};

export default UserStatusBadge;