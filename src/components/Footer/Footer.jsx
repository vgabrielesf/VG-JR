import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/vitoria-gabriele-s-figueiredo-860bba296',
            color: 'hover:text-blue-400'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/vgabrielesf/',
            color: 'hover:text-gray-400'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:vitoria@exemplo.com',
            color: 'hover:text-green-400'
        }
    ];

    return (
        <footer className="bg-gradient-to-r from-[#232526] via-[#0f2027] to-[#3b82f6] text-white shadow-2xl" style={{background: 'linear-gradient(90deg, #232526 0%, #0f2027 50%, #3b82f6 100%)'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Personal Info */}
                    <div className="space-y-4 flex flex-col justify-start items-start md:justify-start md:items-start">
                        <h4 className="text-xl  text-blue-400 mb-2 tracking-wide">Vitória Gabriele</h4>
                        <div className="text-gray-400 text-sm space-y-1 mt-2">
                            <p>vgabrielesf@gmail.com</p>
                            <p>Fortaleza, CE - Brasil</p>
                            <p>www.linkedin.com/in/vitoria-gabriele-s-figueiredo-860bba296</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 flex flex-col justify-center items-start">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Links Rápidos</h4>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                            <li>
                                <a href="#home" className="text-white hover:text-orange-400 dark:text-blue-200 dark:hover:text-orange-400 transition-colors duration-200 font-medium">Início</a>
                            </li>
                            <li>
                                <a href="#about" className="text-white hover:text-orange-400 dark:text-blue-200 dark:hover:text-orange-400 transition-colors duration-200 font-medium">Sobre</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white hover:text-orange-400 dark:text-blue-200 dark:hover:text-orange-400 transition-colors duration-200 font-medium">Contato</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4 flex flex-col justify-center items-start">
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">Conecte-se Comigo</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, idx) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-gray-900 border-2 border-gray-700 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-125 hover:bg-blue-900 focus:ring-2 focus:ring-blue-400 animate-bounce`}
                                        aria-label={social.name}
                                        style={{animationDelay: `${idx * 0.1}s`}}
                                    >
                                        <IconComponent size={22} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Vitória Gabriele. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
                        Feito por Vitória Gabriele
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;