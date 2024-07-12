import { useState } from "react"
import { Card } from '../Card'
import { CardHeader } from '../CardHeader'
import { CardTitle } from '../CardTitle'
import { CardContent } from '../CardContent'
import { Progress } from '../Progress'

export const Skills = () => {
    const [skills, setSkills] = useState([
        { name: "HTML", value: 60, icon: "https://svgl.app/library/html5.svg" },
        { name: "CSS", value: 45, icon: "https://svgl.app/library/css.svg" },
        { name: "JavaScript", value: 45, icon: "https://svgl.app/library/javascript.svg" },
        { name: "React", value: 45, icon: "https://svgl.app/library/react.svg" },
        { name: "Node.js", value: 55, icon: "https://svgl.app/library/nodejs.svg" },
        { name: "MongoDB", value: 50, icon: "https://svgl.app/library/mongodb.svg" },
        { name: "Java", value: 65, icon: "https://svgl.app/library/java.svg" },
        { name: "MySQL", value: 68, icon: "https://svgl.app/library/mysql.svg" },
        { name: "Tailwind", value: 15, icon: "https://svgl.app/library/tailwindcss.svg" },
    ]);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Mis Habilidades</h2>
                    <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                        Dominar diversas tecnologías y herramientas para proporcionar soluciones personalizadas y rápidas.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 sm:grid-cols-1">
                    {skills.map((skill, index) => (
                        <Card key={skill.name}>
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <img src={skill.icon} className="w-6 h-6" alt="Icon" />
                                    <CardTitle>{skill.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <Progress
                                            value={skill.value}
                                            aria-label={`${skill.value}% ${skill.name}`}
                                            icon={skill.icon}
                                            style={{ backgroundColor: 'black' }}
                                        />
                                    </div>
                                    <div className="text-2xl font-bold">{skill.value}%</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};