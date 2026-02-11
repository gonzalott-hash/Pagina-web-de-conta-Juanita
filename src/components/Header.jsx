import React, { useState } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Clientes', href: '#clientes' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Calculator className="h-8 w-8 text-sky-600" />
                    <div className="flex flex-col">
                        <span className="text-xl font-display font-bold text-slate-900 leading-tight">
                            CPC Juana Beizaga Quilichi
                        </span>
                        <span className="text-xs text-slate-500 font-medium tracking-wide">
                            ESTUDIO CONTABLE
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-sky-600 font-medium transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-sky-200"
                    >
                        Agendar Cita
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="bg-sky-600 text-white text-center py-3 rounded-lg font-medium shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Agendar Cita
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
