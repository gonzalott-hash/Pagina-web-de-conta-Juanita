import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative bg-slate-50 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3"
                    alt="Profesional contable en oficina"
                    className="w-full h-full object-cover object-top opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-32 lg:py-40">
                <div className="max-w-2xl">
                    <span className="inline-block px-4 py-2 rounded-full bg-sky-100/80 text-sky-700 font-medium text-sm mb-6 border border-sky-200 backdrop-blur-sm">
                        Estudio Contable Profesional
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
                        Gestión contable con <span className="text-sky-600">rostro humano</span> y rigor profesional.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                        Acompañamos el crecimiento de su negocio con soluciones tributarias y contables diseñadas a su medida. Experiencia y honestidad al servicio de la colectividad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg group"
                        >
                            Agendar una consulta
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all border border-slate-200 hover:border-slate-300"
                        >
                            Nuestros Servicios
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
