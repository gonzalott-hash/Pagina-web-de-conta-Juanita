import React from 'react';
import { Calculator, FileText, TrendingUp, ShieldCheck, Users, Search } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
        <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
            <Icon className="w-7 h-7 text-sky-600" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
            {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

const Services = () => {
    const services = [
        {
            icon: FileText,
            title: "Asesoría Tributaria",
            description: "Optimice sus impuestos y cumpla con sus obligaciones ante la SUNAT de manera eficiente y puntual. Evite multas y recargos innecesarios."
        },
        {
            icon: TrendingUp,
            title: "Contabilidad Externa",
            description: "Delegue su contabilidad en manos expertas (Outsourcing) y concéntrese en lo que mejor sabe hacer: hacer crecer su negocio con tranquilidad."
        },
        {
            icon: Search,
            title: "Auditoría y Consultoría",
            description: "Evaluamos sus estados financieros para garantizar transparencia y proporcionar información clave para una toma de decisiones informada."
        },
        {
            icon: Users,
            title: "Planillas y Laboral",
            description: "Gestión completa de nóminas, beneficios sociales y contratos laborales, asegurando el cumplimiento de la normativa vigente."
        },
        {
            icon: Calculator,
            title: "Constitución de Empresas",
            description: "Asesoramiento integral en la formalización de su negocio, desde la elección del tipo societario hasta la inscripción en registros públicos."
        },
        {
            icon: ShieldCheck,
            title: "Recuperación de Impuestos",
            description: "Análisis y gestión para la recuperación de créditos fiscales, detracciones y otros beneficios a favor de su empresa."
        }
    ];

    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-2">Nuestros Servicios</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Soluciones integrales para su tranquilidad financiera
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Acompañamos a emprendedores, empresas y profesionales independientes con servicios diseñados para resolver sus necesidades específicas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
