
export const Input = ({ id, type, placeholder, className }) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        />
    );
};