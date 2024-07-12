export const Navbar = () => {
    return (
        <header className="bg-[#1b003a] text-primary-foreground py-4 shadow-md">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
                <a href="#" className="text-2xl font-bold text-white" prefetch={false}>
                    Mi Portafolio
                </a>
                <nav className="flex flex-col items-center gap-2 mt-4 md:flex-row md:mt-0">
                    <a
                        href="#sobre-mi"
                        className="rounded-md bg-[#340856] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#572975] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#skills"
                        className="rounded-md bg-[#340856] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#572975] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        Mis skills
                    </a>
                    <a
                        href="#projects"
                        className="rounded-md bg-[#340856] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#572975] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        Mis Proyectos
                    </a>
                    <a
                        href="#contact"
                        className="rounded-md bg-[#340856] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#572975] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        Contáctame
                    </a>
                </nav>
            </div>
        </header>
    )
}

