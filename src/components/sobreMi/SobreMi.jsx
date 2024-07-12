import yo from '../../assets/img/yo.png'

export const SobreMi = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white gap-8 px-4 py-12 md:flex-row md:px-6 md:py-24">
            <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                    src={yo}
                    width={500}
                    height={500}
                    alt="Profile"
                    className="rounded-full w-64 h-64 mx-auto object-cover md:w-80 md:h-80"
                />
            </div>
            <div className="w-full space-y-6 md:w-1/2">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold md:text-4xl">Gary Galindo</h1>
                    <p className="text-muted-foreground">Desarrollador Junior</p>
                    <p className="text-base md:text-lg">
                        Una pasión creciente por la programación y el desarrollo de software. Disfruto enfrentando desafíos técnicos y aprendiendo nuevas habilidades para mejorar mis capacidades. Mi enfoque está en construir bases sólidas en programación y diseño, mientras busco oportunidades para crecer y contribuir de manera significativa en proyectos innovadores.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://github.com/ggalindo2022147"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            target="_blank"    
                        >
                            <GithubIcon className="mr-2 w-5 h-5" />
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            target="_blank"
                        >
                            <BriefcaseIcon className="mr-2 w-5 h-5" />
                            Computrabajo
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            target="_blank"
                        >
                            <LinkedinIcon className="mr-2 w-5 h-5" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BriefcaseIcon(props) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}

function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function LinkedinIcon(props) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}
