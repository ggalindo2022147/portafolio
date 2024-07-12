import React from 'react'

export const CardHeader = ({ children }) => {
    return (
        <div className="border-b border-gray-200 pb-2 mb-4">
            {children}
        </div>
    );
};