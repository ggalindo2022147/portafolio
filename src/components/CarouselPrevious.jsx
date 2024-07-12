
export const CarouselPrevious = () => {
    return (
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 bg-primary/90 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4142 12L10.7071 7.29289C10.3166 6.90237 10.3166 6.26968 10.7071 5.87916C11.0976 5.48864 11.7303 5.48864 12.1208 5.87916L17.7071 11.4655C18.0976 11.856 18.0976 12.4887 17.7071 12.8792L12.1208 18.4655C11.7303 18.856 11.0976 18.856 10.7071 18.4655C10.3166 18.075 10.3166 17.4423 10.7071 17.0518L15.4142 12Z" fill="currentColor" />
            </svg>
        </button>
    );
};