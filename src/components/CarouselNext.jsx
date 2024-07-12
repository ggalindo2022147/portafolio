
export const CarouselNext = () => {
    return (
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 bg-primary/90 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.58579 12L13.2929 16.7071C13.6834 17.0976 13.6834 17.7303 13.2929 18.1208C12.9024 18.5114 12.2697 18.5114 11.8792 18.1208L6.29289 12.5345C5.90237 12.144 5.90237 11.5114 6.29289 11.1208L11.8792 5.53452C12.2697 5.144 12.9024 5.144 13.2929 5.53452C13.6834 5.92505 13.6834 6.55773 13.2929 6.94825L8.58579 12Z" fill="currentColor" />
            </svg>
        </button>
    );
};