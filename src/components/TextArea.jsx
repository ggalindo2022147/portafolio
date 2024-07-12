
export const Textarea = ({ id, placeholder, className }) => {
    return (
        <textarea
            id={id}
            placeholder={placeholder}
            className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        />
    );
};