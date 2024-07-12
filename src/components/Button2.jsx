
export const Button2 = ({ type, variant, className, children }) => {
    const baseClasses = 'inline-block px-6 py-3 rounded-md focus:outline-none';
    const variantClasses =
        variant === 'outline'
            ? `${baseClasses} border border-primary text-primary hover:bg-primary/10 hover:border-primary`
            : `${baseClasses} bg-primary text-white hover:bg-primary/90`;

    return (
        <button type={type} className={`${variantClasses} ${className}`}>
            {children}
        </button>
    );
};