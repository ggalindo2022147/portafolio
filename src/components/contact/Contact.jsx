import { useState } from 'react'
import { Label } from '../Label'
import { Input } from '../Input'
import { Textarea } from '../TextArea'
import { Button2 } from '../Button2'
import toast from 'react-hot-toast'

export const Contact = () => {
    // Estados para los campos del formulario
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        toast.success('¡Me pondré en contacto contigo!');

        setEmail('');
        setSubject('');
        setMessage('');
    };

    const handleReset = () => {
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <section className="bg-background py-12 md:py-24 sm:px-4 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-xl space-y-6">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl sm:text-2xl">Contáctame</h2>
                        <p className="text-muted-foreground sm:text-sm">
                            ¿Tienes alguna pregunta o comentario? Envíame un mensaje y me pondré en contacto contigo.
                        </p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="ejemplo@correo.com"
                                className="w-full px-3 py-2 mt-1 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-sm font-medium text-white">
                                Asunto
                            </label>
                            <input
                                id="subject"
                                placeholder="Escribe el asunto"
                                className="w-full px-3 py-2 mt-1 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-white">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                placeholder="Escribe tu mensaje aquí"
                                className="w-full px-3 py-2 mt-1 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary min-h-[150px] sm:text-sm"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between sm:flex-col sm:items-center sm:gap-4">
                            <Button2 type="submit" className="w-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary disabled:pointer-events-none disabled:opacity-50">
                                Enviar
                            </Button2>
                            <Button2 type="reset" variant="outline" className="w-full px-6 py-3 text-base font-medium bg-white text-primary-foreground rounded-md shadow transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary disabled:pointer-events-none disabled:opacity-50">
                                Limpiar
                            </Button2>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
