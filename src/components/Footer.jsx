import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4">CPC Juana Beizaga Quilichi</h3>
                        <p className="text-slate-400 mb-6 max-w-xs">
                            Solidez contable y asesoría estratégica para impulsar el crecimiento de su negocio con transparencia y experiencia.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:text-sky-400 transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Servicios</a></li>
                            <li><a href="#clientes" className="hover:text-sky-400 transition-colors">Nuestros Clientes</a></li>
                            <li><a href="#contacto" className="hover:text-sky-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-1 text-sky-500 shrink-0" size={18} />
                                <span>Av. Principal 123, Oficina 405<br />Cajamarca, Perú</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-sky-500 shrink-0" size={18} />
                                <span>+51 987 654 321</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-sky-500 shrink-0" size={18} />
                                <span>contacto@juanabeizaga.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} CPC Juana Beizaga Quilichi. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Diseñado con profesionalismo y detalle.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
