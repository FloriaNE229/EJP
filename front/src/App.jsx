import React, { useState, useEffect } from 'react';
import "./App.css";
import logo from "./assets/ejp_logo.jpg";  

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="navbar-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute left-4 text-white p-2"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden lg:flex space-x-8">
            <li><a href="#accueil" className="nav-link">Accueil</a></li>
            <li><a href="#apropos" className="nav-link">À Propos</a></li>
            <li><a href="#evenements" className="nav-link">Événements</a></li>
            <li><a href="#galerie" className="nav-link">Galerie</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/70 backdrop-blur-sm border-b border-white/20">
              <ul className="py-4 space-y-2 px-4">
                <li><a href="#accueil" className="block text-white hover:text-gray-300 py-2 font-medium">Accueil</a></li>
                <li><a href="#apropos" className="block text-white hover:text-gray-300 py-2 font-medium">À Propos</a></li>
                <li><a href="#evenements" className="block text-white hover:text-gray-300 py-2 font-medium">Événements</a></li>
                <li><a href="#galerie" className="block text-white hover:text-gray-300 py-2 font-medium">Galerie</a></li>
                <li><a href="#contact" className="block text-white hover:text-gray-300 py-2 font-medium">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Banner = () => {
  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter">EGLISE JEUNES PRODIGES</h1>
      <div className="border-t border-b border-white/30 py-4 mb-8">
        <p className="text-xl md:text-2xl text-white font-medium tracking-wide">POUR LES JEUNES, PAR LES JEUNES</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mb-16">
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300 min-w-[280px]">Rejoins nous cette semaine</button>
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300 min-w-[280px]">Regarder nos cultes en ligne</button>
      </div>
      <div className="absolute -bottom-1/12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Défiler vers le bas</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 4,
    minutes: 23,
    seconds: 26
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <section className="min-h-screen bg-linear-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Effet de fond translucide avec bulles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center space-y-12">
        {/* En-tête */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-black text-gray-700 tracking-tight">
            PROCHAIN CULTE DE L'EJP
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            CULTE DE L'ÉGLISE DES JEUNES PRODIGES DE LA CITÉ ROYALE
          </p>
        </div>

        {/* Compteur */}
        <div className="flex gap-4 md:gap-6 justify-center">
          <div className="bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] shadow-2xl">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {formatNumber(timeLeft.days)}
            </div>
            <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
              Jours
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] shadow-2xl">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
              Heures
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] shadow-2xl">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
              Minutes
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] shadow-2xl">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
              Secondes
            </div>
          </div>
        </div>

        {/* Section inférieure */}
        <div className="space-y-8 pt-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              EGLISE JEUNES PRODIGES
            </h2>
            <p className="text-lg text-gray-600">CITÉ ROYALE</p>
          </div>

          <div className="w-32 h-px bg-linear-gradient-to-r from-transparent via-gray-500/50 to-transparent mx-auto"></div>

          <button className="bg-white/50 backdrop-blur-sm hover:bg-white/70 text-gray-800 font-medium px-8 py-4 rounded-lg border border-gray-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Notre vision détaillée
          </button>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="font-['Inter','Segoe_UI',sans-serif]">
      <section className="min-h-screen">
        <header className="fixed top-0 right-0 left-0 z-50">
          <Nav />
        </header>

        <main>
          <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
            <div className="absolute banner inset-0 bg-cover bg-center">
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>

            <div className="absolute top-22 left-1/2 transform -translate-x-1/2 z-20"> 
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
                </div>
              </div>
            </div>

            <Banner />
          </section>

          <CountdownSection />
        </main>
      </section>

      <section id="apropos" className="py-20 bg-black bg-opacity-70 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">À Propos</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#111] h-96 flex items-center justify-center rounded-lg border border-[#222]">
              <span className="text-[#aaa]">Image ici</span>
            </div>
            <div>
              <p className="text-lg text-[#ccc] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-[#ccc] leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="evenements" className="py-20 bg-black bg-opacity-70 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Événements à Venir</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(item => (
              <div key={item} className="bg-[#0a0a0a] rounded-lg overflow-hidden hover:scale-105 transition border border-[#222]">
                <div className="bg-[#111] h-48 flex items-center justify-center">
                  <span className="text-[#aaa]">Image {item}</span>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-bold mb-3">Événement {item}</h5>
                  <p className="text-[#aaa] text-sm mb-2">Date: 15 Novembre 2025</p>
                  <p className="text-[#ccc] leading-relaxed mb-4">
                    Description de l'événement ici. Un aperçu rapide de ce qui va se passer.
                  </p>
                  <button className="bg-white hover:bg-[#ddd] text-black px-6 py-2 rounded-lg transition font-semibold">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="py-20 bg-black bg-opacity-70 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1,2,3,4,5,6,7,8].map(item => (
              <div key={item} className="bg-[#111] h-48 flex items-center justify-center rounded hover:opacity-75 transition border border-[#222]">
                <span className="text-[#aaa]">Photo {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section id="contact" className="py-16 bg-white relative">
    {/* Image de fond pour la section du verset */}
    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-10 hidden md:block" 
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544830291-4a3940477c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'}}>
    </div>

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      {/* Titre principal */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        UNE QUESTION ?
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Colonne du formulaire */}
        <div className="space-y-8">
          <div>
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              NOM
            </label>
            <input 
              type="text" 
              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400 transition duration-300"
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              EMAIL
            </label>
            <input 
              type="email" 
              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400 transition duration-300"
              placeholder="Votre adresse email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              ÉCRIVEZ VOTRE MESSAGE
            </label>
            <textarea 
              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400 resize-none transition duration-300"
              rows="6"
              placeholder="Tapez votre message ici..."
            ></textarea>
          </div>

          <button className="w-full bg-gray-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
            ENVOYER VOTRE MESSAGE
          </button>
        </div>

        {/* Colonne du verset biblique avec image de fond */}
        <div className="relative">
          <div className="bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]"
              style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544830291-4a3940477c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'}}>
            {/* Overlay sombre pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Contenu du verset */}
            <div className="relative z-10 p-10 h-full flex flex-col justify-center text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-white bg-opacity-20 inline-block px-6 py-2 rounded-full">
                  LUC 14:23
                </h3>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
              </div>
              
              <p className="text-xl leading-relaxed text-center font-medium mb-8 text-white drop-shadow-lg">
                "ET LE MAÎTRE DIT AU SERVITEUR: VA DANS LES CHEMINS ET LE LONG DES HAIES, 
                ET CEUX QUE TU TROUVERAS, CONTRAINS-LES D'ENTRER, AFIN QUE MA MAISON SOIT REMPLIE."
              </p>

              <div className="mt-8 text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">
                  Église Jeunes Prodiges
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informations de contact avec plus d'espace */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 pt-16 border-t border-gray-200">
        <div className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          </div>
          <h4 className="font-bold text-gray-800 text-xl mb-3">Adresse</h4>
          <p className="text-gray-600 text-lg">Votre adresse ici</p>
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="font-bold text-gray-800 text-xl mb-3">Email</h4>
          <p className="text-gray-600 text-lg">email@example.com</p>
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h4 className="font-bold text-gray-800 text-xl mb-3">Téléphone</h4>
          <p className="text-gray-600 text-lg">+229 XX XX XX XX</p>
        </div>
      </div>
    </div>
        </section>
      
      <footer className="py-12 bg-linear-gradient-to-br from-gray-100 via-gray-200 to-gray-300 backdrop-blur-sm text-center relative overflow-hidden">
        {/* Effets de fond translucides */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-gray-300/40 rounded-full blur-3xl"></div>
        </div>

        <p className="text-lg font-semibold"> SUIVEZ-NOUS SUR LES RESEAUX SOCIAUX.</p><br />

        <div className="container mx-auto px-4 relative z-10">
          {/* Réseaux sociaux */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="#" 
              className="group bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-full p-4 hover:bg-white/80 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="#" 
              className="group bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-full p-4 hover:bg-white/80 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a 
              href="#" 
              className="group bg-white/60 backdrop-blur-md border border-gray-300/30 rounded-full p-4 hover:bg-white/80 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Ligne de séparation */}
          <div className="w-48 h-px bg-linear-gradient-to-r from-transparent via-gray-500/50 to-transparent mx-auto mb-6"></div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm font-medium">
            &copy; 2025 Église Jeunes Prodiges. Tous droits réservés.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;