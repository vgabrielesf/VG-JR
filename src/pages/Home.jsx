import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from '../components/Header/Header';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import { portfolioData, skills, education, certifications, projects, contact } from '../data/services';
import ImageCarousel from '../components/ImageCarousel';

const Typewriter = ({ text, speed = 120, pause = 1200 }) => {
    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayed(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayed('');
                setIndex(0);
            }, pause);
            return () => clearTimeout(resetTimeout);
        }
    }, [index, text, speed, pause]);

    return (
        <span style={{fontFamily: 'Poppins, sans-serif'}}>{displayed}<span className="typewriter-cursor">|</span></span>
    );
};

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEducationType, setSelectedEducationType] = useState('superior');
    const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
    const [selectedExperienceType, setSelectedExperienceType] = useState('inaceiates');
    const [selectedTab, setSelectedTab] = useState('Renderings');

    const certificates = [
        {
            id: 1,
            title: "Banco de Dados",
            description: "",
            image: process.env.PUBLIC_URL + "/assets/Banco de Dados.jpg",
            issuer: "Santander"
        },
        {
            id: 2,
            title: "Python 3",
            description: "",
            image: process.env.PUBLIC_URL + "/assets/Curso Python 3.jpg",
            issuer: "Udemy"
        },
        {
            id: 3,
            title: "FullStack Developer",
            description: "",
            image: process.env.PUBLIC_URL + "/assets/FullStack Developer.jpg",
            issuer: "Uniamérica"
        },
        {
            id: 4,
            title: "NoSQL com MongoDB",
            description: "",
            image: process.env.PUBLIC_URL + "/assets/NoSQL com MongoDB_Página_1.jpg",
            issuer: "IFES"
        },
        {
            id: 5,
            title: "Full Cycle Developer",
            description: "",
            image: process.env.PUBLIC_URL + "/assets/Full Cycle Developer.jpg",
            issuer: "Full Cycle"
        },
        {
            id: 6,
            title: "GitHub Copilot",
            description: "",
            image: process.env.PUBLIC_URL + "/assets/Github Copilot.jpg",
            issuer: "GitHub"
        },
    ];

    const nextCertificates = () => {
        setCurrentCertificateIndex(prev => 
            prev + 1 >= certificates.length - 2 ? 0 : prev + 1
        );
    };

    const prevCertificates = () => {
        setCurrentCertificateIndex(prev => 
            prev - 1 < 0 ? Math.max(0, certificates.length - 3) : prev - 1
        );
    };

    const visibleCertificates = certificates.slice(currentCertificateIndex, currentCertificateIndex + 3);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
        setIsCertificateModalOpen(true);
    };

    const closeCertificateModal = () => {
        setIsCertificateModalOpen(false);
        setSelectedCertificate(null);
    };

    // Effect para fechar modal com ESC
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isCertificateModalOpen) {
                closeCertificateModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isCertificateModalOpen]);

    const handleLearnMore = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            
            {/* Hero Section */}
            <section id="home" className="pt-16 text-white" style={{background: 'linear-gradient(90deg, #232526 0%, #0f2027 50%, #3b82f6 100%)'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Esquerda: Título estiloso */}
                    <div className="flex-1 flex flex-col items-start justify-center text-left">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 mb-6 animate-slide-up" style={{fontFamily: 'Poppins, sans-serif', letterSpacing: '2px', fontWeight: 'normal'}}>
                            Code<span style={{color: '#f97316'}}>&</span>Render
                        </h1>
                        <div className="h-2 w-32 rounded-full mb-4 animate-fade-in" style={{background: 'linear-gradient(90deg, #f97316 0%, #3b82f6 100%)'}} />
                        <p className="text-[18px] text-gray-300 max-w-md animate-fade-in" style={{fontFamily: 'Poppins, sans-serif'}}>
                            Renders, automações e design:
                        </p>
                        <p className="text-[18px] text-gray-300 max-w-md animate-fade-in mt-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                            Tecnologia e criatividade lado a lado.
                        </p>
                    </div>
                    {/* Direita: Vídeo */}
                    {/* Removido o vídeo mp4 conforme solicitado */}
                </div>
            </section>
            {/* Textos centralizados abaixo da parte preta */}
            <div className="w-full flex flex-col justify-center items-center bg-orange-50 dark:bg-orange-900 py-10">
                <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>Preview</h2>
                <div className="flex flex-row gap-8 justify-center items-center">
                    {['Renderings', 'Scripts', 'Modelos 3D', 'Tutorial'].map((tab) => (
                        <div key={tab} className="flex flex-col items-center">
                            <button
                                type="button"
                                onClick={() => setSelectedTab(tab)}
                                className={`text-lg font-semibold transition-colors duration-200 focus:outline-none ${selectedTab === tab ? 'text-blue-500 dark:text-pink-400' : 'text-gray-800 dark:text-white'}`}
                                style={{fontFamily: 'Poppins, sans-serif', background: 'none', border: 'none', padding: 0, cursor: 'pointer', position: 'relative'}}
                            >
                                <span style={{ position: 'relative', display: 'inline-block' }}>
                                    {tab}
                                    {selectedTab === tab && (
                                        <span
                                            className="rounded-full mt-1 animate-fade-in"
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                bottom: -4,
                                                height: '2px',
                                                width: '100%',
                                                display: 'block',
                                                background: 'linear-gradient(90deg, #f97316 0%, #3b82f6 100%)',
                                            }}
                                        />
                                    )}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
                {/* Imagem para Renderings - Carrossel */}
                {selectedTab === 'Renderings' && (
                    <div className="px-8 md:px-24 lg:px-32 w-full flex justify-center mt-8">
                        <ImageCarousel images={[ 
                            { src: process.env.PUBLIC_URL + '/assets/1751601367435.jpg', alt: 'Renderings' },
                            { src: process.env.PUBLIC_URL + '/assets/BASE.jpg', alt: 'Base' },
                            { src: process.env.PUBLIC_URL + '/assets/CARROCANTONEIRA.jpg', alt: 'Carro Cantoneira' }
                        ]} />
                    </div>
                )}
            </div>
            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16">
            {/* Removido o box agrupado para os botões de navegação */}
        </div>
    </div>
</section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-blue-100 dark:bg-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Vamos Trabalhar Juntos?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Estou sempre aberta a novas oportunidades e projetos interessantes. 
                        Entre em contato e vamos conversar!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                        <a 
                            href={`mailto:${portfolioData.personalInfo.email}`}
                            className="inline-flex items-center gap-2 w-40 justify-center p-3 bg-gray-800 rounded-lg hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:bg-blue-900 focus:ring-2 focus:ring-blue-400 text-white font-medium shadow-lg"
                            style={{fontFamily: 'Poppins, sans-serif'}}
                        >
                            <FaEnvelope size={22} />
                             Email
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/vitoria-gabriele-s-figueiredo-860bba296"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 w-40 justify-center p-3 bg-gray-800 rounded-lg hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:bg-blue-900 focus:ring-2 focus:ring-blue-400 text-white font-medium shadow-lg"
                            style={{fontFamily: 'Poppins, sans-serif'}}
                        >
                            <FaLinkedin size={22} />
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/vgabrielesf/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 w-40 justify-center p-3 bg-gray-800 rounded-lg hover:text-gray-400 transition-all duration-300 transform hover:scale-110 hover:bg-blue-900 focus:ring-2 focus:ring-blue-400 text-white font-medium shadow-lg"
                            style={{fontFamily: 'Poppins, sans-serif'}}
                        >
                            <FaGithub size={22} />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {isCertificateModalOpen && selectedCertificate && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fadeIn"
                    onClick={closeCertificateModal}
                >
                    <div 
                        className="relative max-w-4xl max-h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden transform animate-slideUp shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeCertificateModal}
                            className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Certificate Image */}
                        <div className="relative">
                            <img 
                                src={selectedCertificate.image} 
                                alt={`Certificado ${selectedCertificate.title}`}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>
                        
                        {/* Certificate Info */}
                        <div className="p-6 bg-white dark:bg-gray-800">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {selectedCertificate.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {selectedCertificate.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            <Modal 
                isOpen={isModalOpen}
                onClose={closeModal}
                service={selectedItem}
            />

            <Footer />
        </div>
    );
};

export default Home;