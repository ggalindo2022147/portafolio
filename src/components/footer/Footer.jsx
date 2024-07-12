
export const Footer = () => {
    return (
        <footer className="bg-[#1b003a] py-6 md:py-8 text-white">
            <div className="container mx-auto max-w-7xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span href="#" className="flex items-center" prefetch={false}>
                        <MountainIcon className="h-6 w-6" />
                        <span className="text-sm font-medium">Portafolio</span>
                    </span>
                </div>
                <p className="text-xs text-muted-foreground">&copy; 2024 Gary Galindo. All rights reserved.</p>
            </div>
        </footer>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}