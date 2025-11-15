import { Nav } from "./Index";
import { Contact } from "./Index";

const Banner = ()=>{
    return (
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-6">
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter">LES FAMILLES D'IMPACT JEUNES</h1>
            <div className="border-t border-b border-white/30 py-3 mb-6">
                <p className="text-lg md:text-xl text-white font-medium tracking-wide">DECOUVRE LES FAMILLES D'IMPACT JEUNES PRES DE CHEZ TOI</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mb-12">
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2 text-base font-medium transition-all duration-300 min-w-60"><a href="#">Demarer</a></button>
            </div>
        </div>
    )
}

const Aboutfij = ()=>{
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center ">
        <div className="p-8 rounded-lg shadow-md">
          <h2 className="text-6xl font-bold mb-4 text-center">C'est quoi une FIJ ?</h2>
            <p className=" flex flex-col px-30 text-xl mx-auto text-center">
              Les FIJ sont les cellules de l'Eglise des Jeunes d'Impact Centre Chrétien.Les membres de l'église se réunissent tous les mardis de 19h15 à 20h30 dans les 
              maison hôtes pour s'édifier et influencer leurs villes et leurs quartiers avec les valeurs de Christ ! (Actes 5:42)
            </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  p-4 py-12">
        <div className=" maincontainer w-full h-80">
          <div className="w-full h-full thecard">
            {/* face avant */}
            <div className="thefront absolute w-full h-full bg-amber-200 rounded-lg overflow-hidden">
              <div className="w-full bg-center bg-no-repeat shrink-0 bg-cover rounded-t-lg"
                style={{
                  backgroundImage: 'url("./assets/FB_IMG_1757701105299.jpg")',
                  height: '200px'
                }}>

              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            Notre Mission
          </p>
        </div>
        <div className="w-full h-80">
          <h3>Vision</h3>
        </div>
        <div>
          <p>Notre vision</p>
        </div>
      </div>
      
    </div>
  )
}

const Fijgird = () => {
  const fijData=[
    {nom:"Fij Djassin", description:"Create a welcoming atmosphere for every guest", mapURL:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"},
    {nom:"Fij Tokpota", description:"Create a welcoming atmosphere for every guest", mapURL:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"},
    {nom:"Fij Attakè", description:"Create a welcoming atmosphere for every guest", mapURL:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"},
    {nom:"Fij Attakè", description:"Create a welcoming atmosphere for every guest", mapURL:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"},
    {nom:"Fij Attakè", description:"Create a welcoming atmosphere for every guest", mapURL:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"},
    {nom:"Fij Attakè", description:"Create a welcoming atmosphere for every guest", mapURL:"//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2374295874697!2d2.6072094!3d6.491592000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b50af82c2a631%3A0xbf1590d6b3c47000!2sBd%20Tokpota%2C%20Porto-Novo!5e0!3m2!1sen!2sbj!4v1763058642929!5m2!1sen!2sbj"},

  ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {fijData.map((fij,index)=>{
            return <div key={index} className="maincontainer w-full h-80 perspective-1000">
              <div className="thecard w-full h-full">
                {/* face avant */}
                <div className="thefront absolute bg-amber-900 w-full h-full rounded-lg flex flex-col">
                  <div
                    className="w-full bg-center bg-no-repeat shrink-0 bg-cover rounded-t-lg"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6BmPTnDw34qzZ2D9rSy1_9-T_LRSZVaSGhwIzKzLNdnaAu0M4iy--VdQHhVmp4wS99XzRDDzLDwuov3lVIB8dOJ9m6vGDWbVOX88JqdCfSFIiG4rlbLQPWKYH3ez7r1GlJiPkar_V8jG2wtRHmJkvi03K7tK42_62chA-TrHj3cYAJXtaRiVvrPC1mcxdroTlhuTmZ0veXSLE1ZKDwnaTzDtC4WGDOc-rjHDdOHsJedmy0Uj211wmY47JMAo1IM_Pv2ZhkJezOE4")',
                      height: '200px'
                    }}
                  />
                  <div className="p-4 grow ">
                      <p className="text-white text-base font-medium leading-normal"> {fij.nom} </p>
                      <p className="text-[#9dabb9] text-sm font-normal leading-normal"> {fij.description} </p>
                    </div>
                  </div>
                    {/* face arriere */}
                    <div className="theback absolute w-full h-full bg-red-400 rounded-lg overflow-hidden">
                      <iframe 
                        src={fij.mapURL} 
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"  
                        title={`Carte de localisation de fij ${fij.nom} `}
                      />
                </div>
              </div>
            </div>
          })}
        </div>
    )
}




const Fij = () =>{
    return(
        <section className="background-dark">
          <div className="min-h-screen">
              <header className="fixed top-0 right-0 left-0 z-50">
                  <Nav />
              </header>
              <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
                  <div className="absolute banner-fij inset-0 bg-cover bg-center">
                      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                  </div>
                  <Banner />
              </section>
              <section id="about" className="py-12 bg-white">
                <Aboutfij />
              </section>
              {/* Les familles d'impact */}
              <section className="py-12 px-4">
                <div className="flex items-center justify-center">
                  <div>
                    <h2 className="text-6xl  mb-4 text-center" >Rejoins une FIJ</h2>
                    <p className="text-center">Rejoins la FIJ la plus proche de chez toi</p>
                  </div>
                </div>
                  <Fijgird />
              </section>
              <section className="py-12 bg-white">
                <Contact />
              </section>
          </div>
        </section>
    )
}

export default Fij;