
export const Label = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="block font-medium text-base text-muted-foreground">
            {children}
        </label>
    );
};