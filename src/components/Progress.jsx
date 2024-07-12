import React from 'react'

export const Progress = ({ value, ariaLabel }) => {
    return (
        <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full bg-black rounded-full"
                style={{ width: `${value}%` }}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={ariaLabel}
            />
        </div>
    );
};
