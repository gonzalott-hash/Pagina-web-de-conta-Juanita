import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-2">Contáctenos</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                            ¿Hablamos de su próximo paso?
                        </h3>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Estamos listos para resolver sus dudas y ordenar sus finanzas. Visítenos en nuestras oficinas o escríbanos hoy mismo para agendar una reunión.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-sky-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Nuestra Oficina</h4>
                                    <p className="text-slate-600">Av. Principal 123, Oficina 405<br />Cajamarca, Perú</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="text-sky-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Teléfono & WhatsApp</h4>
                                    <p className="text-slate-600">+51 987 654 321</p>
                                    <p className="text-slate-500 text-sm">Lunes a Viernes de 9:00 am a 6:00 pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-sky-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Correo Electrónico</h4>
                                    <p className="text-slate-600">contacto@juanabeizaga.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-slate-50 focus:bg-white"
                                    placeholder="Sus nombres y apellidos"
                                />
                            </div>

                            <div>
                                <label htmlFor="ruc" className="block text-sm font-medium text-slate-700 mb-2">RUC / DNI <span className="text-slate-400 font-normal">(Opcional)</span></label>
                                <input
                                    type="text"
                                    id="ruc"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-slate-50 focus:bg-white"
                                    placeholder="Número de documento"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                                    placeholder="¿En qué podemos ayudarle?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md flex items-center justify-center space-x-2"
                            >
                                <span>Enviar Mensaje</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
