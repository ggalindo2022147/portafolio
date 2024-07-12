// src/components/Button.jsx
import React from 'react';

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow transition-colors ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
