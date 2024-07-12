
export const Projects = () => {
    return (
        <section className="py-12 md:py-20 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 md:mb-12">&lt;/&gt; Mis proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
                        <img
                            src="https://github.com/ggalindo2022147/holaaa/blob/main/img/clotes%20store%202.png?raw=true"
                            alt="Proyecto 1"
                            width={800}
                            height={600}
                            className="w-full h-64 md:h-80 object-cover"
                            style={{ objectPosition: '0% 100%' }}
                        />
                        <div className="p-6 md:p-8 lg:p-6">
                            <h3 className="text-xl font-bold mb-2">Clothes Store</h3>
                            <p className="text-muted-foreground mb-4">Proyecto que gestiona una tienda online, con carrito de compras y la elaboración de factura en base a los artículos adquiridos.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">Java EE</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">MySQL</span>
                            </div>
                            <a
                                href="https://github.com/jdomingo2022206/clothes_store.git"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-5 h-5" />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
                        <img
                            src="https://github.com/ggalindo2022147/holaaa/blob/main/img/Control%20academico%201.png?raw=true"
                            alt="Proyecto 2"
                            width={800}
                            height={600}
                            className="w-full h-64 md:h-80 object-cover"
                            style={{ objectPosition: '0% 100%' }}
                        />
                        <div className="p-6 md:p-8 lg:p-6">
                            <h3 className="text-xl font-bold mb-2">Control Académico</h3>
                            <p className="text-muted-foreground mb-4">API que maneja estudiantes, profesores y permite que el estudiante se asigne a tres cursos como máximo, con un CRUD de cursos.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">Node.js</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">MongoDB</span>
                            </div>
                            <a
                                href="https://github.com/ggalindo2022147/PS_controlAcademico.git"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-5 h-5" />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
                        <img
                            src="https://github.com/ggalindo2022147/holaaa/blob/main/img/Gestor%20opiniones%201.png?raw=true"
                            alt="Proyecto 3"
                            width={800}
                            height={600}
                            className="w-full h-64 md:h-80 object-cover"
                            style={{ objectPosition: '0% 100%' }}
                        />
                        <div className="p-6 md:p-8 lg:p-6">
                            <h3 className="text-xl font-bold mb-2">Gestor de Opiniones</h3>
                            <p className="text-muted-foreground mb-4">API que maneja publicaciones creadas por usuarios, permite la interacción con cada publicación y agregar comentarios.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">Node.js</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">MongoDB</span>
                            </div>
                            <a
                                href="https://github.com/ggalindo2022147/PS_gestorOpiniones.git"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-5 h-5" />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 md:mb-12"></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
                        <img
                            src="https://github.com/ggalindo2022147/holaaa/blob/main/img/blog.jpg?raw=true"
                            alt="Proyecto 4"
                            width={800}
                            height={600}
                            className="w-full h-64 md:h-80 object-cover"
                            style={{ objectPosition: '0% 100%' }}
                        />
                        <div className="p-6 md:p-8 lg:p-6">
                            <h3 className="text-xl font-bold mb-2">Blog - Frontend</h3>
                            <p className="text-muted-foreground mb-4">Creación de un blog, donde se muestran publicaciones y cada publicacion al mostrarla tiene detalles de la publicacion y se agregan comentarios.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">React</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">HTML5</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">CSS</span>
                            </div>
                            <a
                                href="https://github.com/ggalindo2022147/blog_front.git"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-5 h-5" />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
                        <img
                            src="https://github.com/ggalindo2022147/holaaa/blob/main/img/alm.jpg?raw=true"
                            alt="Proyecto 5"
                            width={800}
                            height={600}
                            className="w-full h-64 md:h-80 object-cover"
                            style={{ objectPosition: '0% 100%' }}
                        />
                        <div className="p-6 md:p-8 lg:p-6">
                            <h3 className="text-xl font-bold mb-2">Almacenadora</h3>
                            <p className="text-muted-foreground mb-4">Creacion de una almacenadora, donde posee un CRUD completo para crear tareas y asignar dichas tareas a los empleados y completar las tareas.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">React</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">HTML5</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">CSS</span>
                            </div>
                            <a
                                href="https://github.com/ggalindo2022147/frontend-alm.git"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-5 h-5" />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
                        <img
                            src="https://github.com/ggalindo2022147/holaaa/blob/main/img/empresas.jpg?raw=true"
                            alt="Proyecto 6"
                            width={800}
                            height={600}
                            className="w-full h-64 md:h-80 object-cover"
                            style={{ objectPosition: '0% 100%' }}
                        />
                        <div className="p-6 md:p-8 lg:p-6">
                            <h3 className="text-xl font-bold mb-2">Gestor de Empresas</h3>
                            <p className="text-muted-foreground mb-4">API que maneja que contiene un CRUD para manejar empresas, con la opcion de exportar a excel todas las empresas registradas.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">Node.js</span>
                                <span className="bg-muted px-2 py-1 rounded-md text-sm">MongoDB</span>
                            </div>
                            <a
                                href="https://github.com/ggalindo2022147/T_gestorEmpresa.git"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-5 h-5" />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
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