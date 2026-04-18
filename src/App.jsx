/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Facebook, 
  Star, 
  Wine, 
  PartyPopper, 
  Cake 
} from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/619641314_122180825354596431_3343398772926336456_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=S-bjYekvB20Q7kNvwHkic_y&_nc_oc=Adpa11NHT0qSOaM64xVWepzed05qVcjyOpHk5CdSdJLVi8TJzEMYz6fLpVCDWC0MWEM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=LSP0bI_9QfA8L5xbs2modg&_nc_ss=7a3a8&oh=00_Af2r7lo17ohAJbEEB6mct9J48OMbTxubkISBsphhX3ZyrQ&oe=69E91659",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/619679233_122180825342596431_8463880575734020245_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rCSI5pfuwdwQ7kNvwHCxz5A&_nc_oc=AdrcI6kOHCUIpELsahRvoeUUWjAyYb9jr4ivVVfWMY3dC3AZZsdUP4lsslOaXS8kJrc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=7_vjzPXdWmcI-KjLZZYdHQ&_nc_ss=7a3a8&oh=00_Af2pe5ciUQi4Q0piGPa0hMonv9wpLauC563Fedxwb3ph1g&oe=69E925CB",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/606507615_122178145742596431_1299677151659170868_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=QtAdemYGPKwQ7kNvwE-7GwK&_nc_oc=AdpDeA5a1OyueaamtCsUBorqQV0lVAw626jholywx95byHMXjzKEHDFN-nzLEncTZSs&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=9lRmE7TqlNM4jqFFF-EjAw&_nc_ss=7a3a8&oh=00_Af2iGqJQTaioHO2r6Ikc6tGv3DQnBzljRkTECYX1oviqCg&oe=69E914E4",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/557564641_122167266848596431_7469945703625605996_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XSn6AVv1ZhwQ7kNvwFBiglx&_nc_oc=AdrC-7nyiJIyDqNZUol736UjyzmmkXzpB_Gs7vCjcuhOVQCmw8T6WDqnF4ZnOEk22gI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=N7rR9ugdCI7TYjviugZkFA&_nc_ss=7a3a8&oh=00_Af0UohVGDN-qX71zfFAa9qW-572YQUvYH4cI2AKJ0EoYlw&oe=69E942E9",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/565717511_122169099392596431_3903594270437409696_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tqgXv_F3BdsQ7kNvwEER8-l&_nc_oc=AdqYdHtz-lSlDYg958mxUMNnEtJoQdNmfWXn3s1UM5L_iwQDs1t5LocrqHAobe0oyZo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=aBVD4gLnbOQwXrvk9SLang&_nc_ss=7a3a8&oh=00_Af3L739gnPNp8GMWRAeohvcTqUJNBqtW4PjJTCLXUqJ40Q&oe=69E9154E",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/557701169_122166357632596431_6351473527843962692_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=y_NdZ1shkeQQ7kNvwEuQktU&_nc_oc=AdqNrCJ1h1NwgSOs1EFUdW4GzTRjR3iJRmk8CsHpzCcUMult04vssFGM2xcJeViDREA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yS6f6zXObXWUDIObk-xgNg&_nc_ss=7a3a8&oh=00_Af10Gx7XVrnZqaQO-WYeI7j89fbKTWhNAwsfhBCrFAYutw&oe=69E923DD",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/470498604_122118974396596431_4861521082769461708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=sTKfqBWRC84Q7kNvwHZDQjW&_nc_oc=AdrqMNpwMDOIkryQ6pdg5tSon97Q6jaSGOpISZKV9dH_OoNeLzY2J9Eqnvl8cCmZoAg&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=_9AfqFPe2VEddHVGcciDHQ&_nc_ss=7a3a8&oh=00_Af2Brf4JyGeUaVblNNlPoXikyumkmLHQxt7_VZKtlbSCVw&oe=69E92133"
];

const FB_PROFILE = "https://www.facebook.com/profile.php?id=61567892938922&locale=pl_PL";
const FB_REVIEWS = "https://www.facebook.com/profile.php?id=61567892938922&sk=reviews&locale=pl_PL";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-gold selection:text-brand-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold tracking-tight text-brand-gold">
              Wrocławska <span className="text-brand-text font-light italic opacity-60">222</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-muted">
            <a href="#o-nas" className="hover:text-brand-gold transition-colors">Oferta</a>
            <a href="#galeria" className="hover:text-brand-gold transition-colors">Galeria</a>
            <a href="#opinie" className="hover:text-brand-gold transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-brand-gold transition-colors">Kontakt</a>
          </div>

          <a 
            href="tel:503990201" 
            className="hidden sm:flex items-center gap-2 bg-brand-gold text-brand-bg px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            <Phone size={14} />
            503 990 201
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES[0]} 
            alt="Wnętrze Sali" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-serif italic text-xl md:text-2xl mb-4 block uppercase tracking-widest">
              Wyjątkowa Przestrzeń w Legnicy
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-light text-brand-text leading-tight mb-8">
              Sala Bankietowa <br />
              <span className="italic font-normal text-brand-gold">Wrocławska</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto">
              Tworzymy idealne tło dla Twoich najpiękniejszych chwil. Wynajem sali na wesela, urodziny i komunie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={FB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-bg text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Facebook size={18} />
                Facebook
              </a>
              <a 
                href="tel:503990201"
                className="w-full sm:w-auto px-8 py-4 border border-brand-muted text-brand-text text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Zadzwoń do nas
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offer / About */}
      <section id="o-nas" className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-brand-text">Nasza Oferta</h2>
            <div className="w-24 h-px bg-brand-gold mx-auto opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Wesela", 
                desc: "Eleganckie przyjęcia weselne w luksusowej oprawie. Zapewniamy klimat, którego nie zapomnisz.",
                icon: <Wine className="text-brand-gold" size={40} />
              },
              { 
                title: "Komunie", 
                desc: "Uroczyste spotkania rodzinne w przyjaznej atmosferze. Idealne miejsce na Pierwszą Komunię Świętą.",
                icon: <Star className="text-brand-gold" size={40} />
              },
              { 
                title: "Urodziny", 
                desc: "Huczne imprezy lub kameralne kolacje. Sala Wrocławska to miejsce na każdy rodzaj jubileuszu.",
                icon: <Cake className="text-brand-gold" size={40} />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-brand-card p-10 rounded-sm shadow-2xl border border-white/5 text-center transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="font-serif text-2xl mb-4 text-brand-gold">{item.title}</h3>
                <p className="text-brand-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Image 1 - Full Width Parallax-ish */}
      <section className="h-[60vh] relative overflow-hidden border-y border-white/5">
        <img 
          src={IMAGES[1]} 
          alt="Sala Wrocławska" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-bg/40 flex items-center justify-center">
            <div className="p-8 border border-brand-gold/20 backdrop-blur-md bg-brand-card/30 rounded-sm text-center">
                <p className="text-brand-text text-2xl font-serif italic">"Miejsce, gdzie wspomnienia nabierają blasku"</p>
            </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 bg-brand-bg px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Elegancja w Detalu</span>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-text">Galeria Zdjęć</h2>
            </div>
            <a 
              href={FB_PROFILE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm uppercase tracking-widest font-bold pb-2 border-b border-brand-gold/20 hover:border-brand-gold transition-all text-brand-muted"
            >
              Więcej na Facebooku <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IMAGES.slice(2).map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-sm bg-brand-card border border-white/5 ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Galeria ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center">
                    <PartyPopper className="text-brand-gold" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="opinie" className="py-24 px-6 overflow-hidden bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Star className="text-brand-gold mb-6" size={48} />
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-brand-text font-light">Nasi Klienci o Nas</h2>
          <p className="max-w-xl text-brand-muted font-light mb-12">
            Satysfakcja naszych gości jest dla nas najważniejsza. Zapraszamy do zapoznania się z opiniami osób, które zorganizowały u nas swoje najważniejsze uroczystości.
          </p>
          <a 
            href={FB_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-brand-gold text-brand-bg rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-2xl shadow-brand-gold/10"
          >
            Zobacz opinie na Facebooku
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-brand-card p-12 rounded-sm border-l-4 border-brand-gold">
              <h2 className="font-serif text-4xl md:text-5xl mb-12 text-brand-text">Zapraszamy do Kontaktu</h2>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-brand-gold text-xs uppercase tracking-widest font-bold block mb-2">Adres</span>
                    <p className="text-2xl font-serif text-brand-text">Wrocławska 222</p>
                    <p className="text-brand-muted font-light">59-220 Legnica</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-brand-gold text-xs uppercase tracking-widest font-bold block mb-2">Telefon</span>
                    <a href="tel:503990201" className="text-3xl font-serif text-brand-text hover:text-brand-gold transition-colors block tracking-tighter">503 990 201</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-brand-gold text-xs uppercase tracking-widest font-bold block mb-2">Email</span>
                    <a href="mailto:gokoles@gmail.com" className="text-xl font-serif text-brand-text hover:text-brand-gold transition-colors block border-b border-brand-gold/30 pb-1">gokoles@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-col items-start gap-4">
                <a 
                  href={FB_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-brand-gold text-brand-bg p-4 rounded-sm group-hover:bg-white transition-colors">
                    <Facebook size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-gold transition-colors">Śledź nas na Facebooku</span>
                </a>
              </div>
            </div>

            <div className="relative h-[500px] lg:h-auto overflow-hidden rounded-sm border border-white/5">
              <img 
                src={IMAGES[2]} 
                alt="Wystrój Sali" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-bg/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-brand-text text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="font-serif text-2xl mb-8 text-brand-gold">Sala Bankietowa Wrocławska</p>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-brand-muted mb-12">
            <span>Legnica</span>
            <span>Wesela</span>
            <span>Urodziny</span>
            <span>Komunie</span>
          </div>
          <p className="text-brand-muted/30 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Sala Bankietowa Wrocławska | Najlepsze miejsce na Twoje wydarzenie
          </p>
        </div>
      </footer>
    </div>
  );
}
