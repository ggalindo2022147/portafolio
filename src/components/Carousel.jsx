
export const Carousel = ({ className, children }) => {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    );
};