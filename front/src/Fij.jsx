import { Nav } from "./Index";
import { Contact } from "./Index";

const Banner = () => {
  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
        LES FAMILLES D'IMPACT JEUNES
      </h1>
      <div className="border-t-2 border-b-2 border-white/50 py-5 mb-10 backdrop-blur-sm bg-white/5 rounded-lg">
        <p className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wide drop-shadow-lg">
          DÉCOUVRE LES FAMILLES D'IMPACT JEUNES PRÈS DE CHEZ TOI
        </p>
      </div>
      <div className="flex justify-center items-center">
        <a 
          href="#fij-list" 
          className="group bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-black px-12 py-5 text-lg font-bold transition-all duration-300 rounded-xl shadow-2xl hover:shadow-white/30 hover:scale-105 flex items-center gap-3"
        >
          Démarrer
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Aboutfij = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* En-tête avec animation */}
      <div className="text-center mb-20">
        <div className="inline-block mb-6">
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-4"></div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-gray-900 tracking-tight">
            C'est quoi une FIJ ?
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
            Les FIJ sont les cellules de l'Église des Jeunes d'Impact Centre Chrétien. 
            Les membres de l'église se réunissent <span className="font-black text-amber-700">tous les mardis de 19h15 à 20h30</span> dans les 
            maisons hôtes pour s'édifier et influencer leurs villes et leurs quartiers avec les valeurs de Christ ! 
            <span className="text-gray-600 italic block mt-3">(Actes 5:42)</span>
          </p>
        </div>
      </div>

      {/* Grille Mission & Vision améliorée */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto">
        
        {/* Mission */}
        <div className="group cursor-pointer">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-amber-200/50">
            <img 
              src="./assets/FB_IMG_1757701105299.jpg" 
              alt="Notre Mission" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            
            {/* Badge décoratif */}
            <div className="absolute top-6 left-6">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Notre Mission
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-4xl md:text-3xl font-black text-gray-500 mb-5 drop-shadow-lg">Notre Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Édifier les jeunes dans leur foi et les équiper pour impacter leurs quartiers et villes avec l'évangile de Christ.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="group cursor-pointer">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-amber-200/50">
            <img 
              src="./assets/FB_IMG_1757701105299.jpg" 
              alt="Notre Vision" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            
            {/* Badge décoratif */}
            <div className="absolute top-6 left-6">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Notre Vision
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-4xl md:text-3xl font-black text-gray-500 mb-5 drop-shadow-lg">Notre Vision</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Voir chaque jeune transformé par Christ et devenir un agent de changement dans sa communauté.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

          
const Fijgird = () => {
  const fijData = [
    {
      nom: "FIJ Djassin",
      description: "Rejoins la famille d'impact de Djassin",
      mapURL: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"
    },
    {
      nom: "FIJ Tokpota",
      description: "Rejoins la famille d'impact de Tokpota",
      mapURL: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"
    },
    {
      nom: "FIJ Attakè",
      description: "Rejoins la famille d'impact d'Attakè",
      mapURL: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"
    },
    {
      nom: "FIJ Cotonou Centre",
      description: "Rejoins la famille d'impact du Centre",
      mapURL: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"
    },
    {
      nom: "FIJ Calavi",
      description: "Rejoins la famille d'impact de Calavi",
      mapURL: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"
    },
    {
      nom: "FIJ Akpakpa",
      description: "Rejoins la famille d'impact d'Akpakpa",
      mapURL: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 p-4 max-w-7xl mx-auto">
      {fijData.map((fij, index) => (
        <div key={index} className="maincontainer w-full h-[420px] perspective-1000">
          <div className="thecard w-full h-full">
            
            {/* Face avant */}
            <div className="thefront absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-linear-gradient-to-br from-amber-900 to-amber-700 border-4 border-white/20">
              <div
                className="w-full bg-center bg-cover shrink-0 relative"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6BmPTnDw34qzZ2D9rSy1_9-T_LRSZVaSGhwIzKzLNdnaAu0M4iy--VdQHhVmp4wS99XzRDDzLDwuov3lVIB8dOJ9m6vGDWbVOX88JqdCfSFIiG4rlbLQPWKYH3ez7r1GlJiPkar_V8jG2wtRHmJkvi03K7tK42_62chA-TrHj3cYAJXtaRiVvrPC1mcxdroTlhuTmZ0veXSLE1ZKDwnaTzDtC4WGDOc-rjHDdOHsJedmy0Uj211wmY47JMAo1IM_Pv2ZhkJezOE4")',
                  height: '60%'
                }}
              >
                {/* Badge numéro */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="text-amber-900 font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              
              <div className="p-6 h-[40%] flex flex-col justify-center bg-white">
                <p className="text-gray-700 text-2xl font-black mb-2">{fij.nom}</p>
                <p className="text-gray-700 text-base leading-relaxed font-medium">{fij.description}</p>
                
                {/* Indicateur de retournement */}
                <div className="mt-4 flex items-center gap-2 text-amber-700 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Clique pour voir la carte</span>
                </div>
              </div>
            </div>

            {/* Face arrière */}
            <div className="theback absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-600/50">
              <iframe
                src={fij.mapURL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Carte de localisation de ${fij.nom}`}
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

const Fij = () => {
  return (
    <section className="bg-white">
      <div className="min-h-screen">
        
        {/* Header fixe */}
        <header className="fixed top-0 right-0 left-0 z-50">
          <Nav />
        </header>

        {/* Hero Banner */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute banner-fij inset-0 bg-cover bg-center">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          </div>
          <Banner />
        </section>

        {/* Section À Propos */}
        <section id="about" className="py-24 bg-linear-gradient-to-b from-white via-gray-50 to-white">
          <Aboutfij />
        </section>

        {/* Séparateur stylisé */}
        <div className="w-full bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-linear-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <div className="flex-1 h-px bg-linear-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Section Liste des FIJ */}
        <section id="fij-list" className="py-24 bg-linear-gradient-to-b from-white via-amber-50/30 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="w-16 h-1 bg-amber-600 mx-auto mb-4"></div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-gray-900 tracking-tight">
                  Rejoins une FIJ
                </h2>
                <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
              </div>
              <p className="text-2xl sm:text-3xl text-gray-800 max-w-4xl mx-auto font-light leading-relaxed">
                Rejoins la FIJ la plus proche de chez toi et fais partie d'une communauté qui impacte
              </p>
            </div>
            <Fijgird />
          </div>
        </section>

        {/* Séparateur stylisé */}
        <div className="w-full bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-linear-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <div className="flex-1 h-px bg-linear-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <section className="py-24 bg-white">
          <Contact />
        </section>

      </div>
    </section>
  );
};

export default Fij;