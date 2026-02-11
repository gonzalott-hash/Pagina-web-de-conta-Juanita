import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role }) => (
    <div className="bg-white p-8 rounded-2xl relative shadow-sm border border-rose-100">
        <Quote className="absolute top-8 left-8 text-sky-200 w-10 h-10 -z-10" />
        <p className="text-slate-700 italic mb-6 relative z-10">
            "{quote}"
        </p>
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold mr-3 text-sm">
                {author.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-slate-900 text-sm">{author}</h4>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{role}</span>
            </div>
        </div>
    </div>
);

const Clients = () => {
    const testimonials = [
        {
            quote: "La CPC Juana Beizaga ha sido clave para la formalización y orden de mi empresa. Su trato es directo y muy profesional.",
            author: "Carlos Méndez",
            role: "Gerente, Importadora Méndez"
        },
        {
            quote: "Gracias a su asesoría tributaria hemos optimizado nuestros procesos y evitado contingencias con SUNAT. Totalmente recomendados.",
            author: "Ana Gutiérrez",
            role: "Administradora, Clínica Santa Fe"
        },
        {
            quote: "Un servicio contable que realmente se preocupa por explicarte las cosas claras. Nos sentimos muy seguros trabajando con ellos.",
            author: "Luis Paredes",
            role: "Fundador, Constructora Paredes SAC"
        }
    ];

    return (
        <section id="clientes" className="py-24 bg-white border-t border-rose-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-2">Nuestros Clientes</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        La confianza de quienes crecen con nosotros
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Más que un estudio contable, somos aliados estratégicos de diversos sectores comerciales de la región.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>

                {/* Logos Section (Placeholders) */}
                <div className="border-t border-slate-100 pt-16">
                    <p className="text-center text-slate-400 text-sm font-medium mb-8">
                        EMPRESAS QUE CONFÍAN EN NOSOTROS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Placeholder Logos showing names for simple clarity */}
                        <span className="text-xl font-bold text-slate-600">COMERCIAL EL SOL</span>
                        <span className="text-xl font-bold text-slate-600">FERRETERÍA CENTRAL</span>
                        <span className="text-xl font-bold text-slate-600">TRANSPORTES UNIDOS</span>
                        <span className="text-xl font-bold text-slate-600">GRUPO INMOBILIARIO</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
